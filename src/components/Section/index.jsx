import ItemCard from "../ItemCard";

const Section = ({ itemsList, sectionName }) => {
  return (
    <div>
      <h3>{sectionName}</h3>
      <div>
        {itemsList.map((item) => (
          <ItemCard key={item.id} details={item}/>
        ))}
      </div>
    </div>
  );
};

export default Section;
