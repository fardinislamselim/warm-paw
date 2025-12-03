import React, { useState, useMemo } from "react";
import { useLoaderData } from "react-router";
import ServiceCard from "../components/ServiceCard";
import SectionTitle from "../components/SectionTitle";

const Services = () => {
  const initialData = useLoaderData() || [];

  const [sortOrder, setSortOrder] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  const processedData = useMemo(() => {
    let currentItems = initialData;

    if (filterTerm) {
      currentItems = initialData.filter(
        (service) =>
          service.serviceName
            .toLowerCase()
            .includes(filterTerm.toLowerCase()) ||
          service.description.toLowerCase().includes(filterTerm.toLowerCase())
      );
    }

    if (sortOrder) {
      currentItems = [...currentItems].sort((a, b) => {
        const aPrice = a.price;
        const bPrice = b.price;

        if (sortOrder === "price_asc") {
          return aPrice - bPrice;
        } else if (sortOrder === "price_desc") {
          return bPrice - aPrice;
        }
        return 0;
      });
    }

    return currentItems;
  }, [initialData, sortOrder, filterTerm]);

  return (
    <div className="py-10 bg-base-100 ">
      <div className="container mx-auto px-2">
        <SectionTitle
          title="Our Services"
          subtitle="We offer a variety of pet care services to meet your needs."
          className="mb-8"
        />

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search by Service Name or Description..."
            className="input input-bordered w-full md:max-w-xs"
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
          />

          <select
            className="select select-bordered w-full md:max-w-xs"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort: Default</option>
            <option value="price_asc">Price: Ascending (Low to High)</option>
            <option value="price_desc">Price: Descending (High to Low)</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {processedData.map((service) => (
            <ServiceCard
              key={service.id || service.serviceId}
              service={service}
            />
          ))}

          {processedData.length === 0 && (
            <p className="col-span-full text-center text-xl text-error mt-8">
              Sorry, no services matched your filtering or sorting criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
