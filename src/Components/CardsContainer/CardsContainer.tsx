
import PropertyCard from "../PropertyCard/PropertyCard";
const CardsContainer: React.FC = () => {
  // Sample JSON data for 20 properties
  const properties = [
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s",
      title: "Luxury Beachside Hotel",
      location: "Miami, FL",
      rating: 4.5,
      price: 300
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s",
      title: "Cozy Mountain Cabin",
      location: "Denver, CO",
      rating: 4.7,
      price: 220
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s",
      title: "City Apartment",
      location: "New York, NY",
      rating: 4.2,
      price: 450
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s",
      title: "Beach Resort",
      location: "Honolulu, HI",
      rating: 4.8,
      price: 500
    },
    
    { 
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s",
      title: "Boutique Hotel", 
      location: "Austin, TX", 
      rating: 4.6, 
      price: 320 
    },

    {  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s", title: "Lakeside Cottage", location: "Lake Tahoe, CA", rating: 4.9, price: 280 },
    {  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s",title: "Luxury Villa", location: "Los Angeles, CA", rating: 4.7, price: 650 },
    {  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s", title: "Rustic Farmhouse", location: "Nashville, TN", rating: 4.5, price: 240 },
    {  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s",title: "Modern Condo", location: "Seattle, WA", rating: 4.3, price: 400 },
    {  imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SRRmhH4X5N2e4QalcoxVbzYsD44C-sQv-w&s",
      logoSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPL4Bl5E8RfzxiwHYv5L0rAgufPSCYIRW2w&s", title: "Tropical Bungalow", location: "Key West, FL", rating: 4.8, price: 360 },

  ];

  return (
    <>
      

      {/* Container for Property Cards */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              imageSrc={property.imageSrc}
              logoSrc={property.logoSrc}
              title={property.title}
              location={property.location}
              rating={property.rating}
              price={property.price}
            />
          ))}
        </div>
      </section>

    </>
  );
};

export default CardsContainer;
