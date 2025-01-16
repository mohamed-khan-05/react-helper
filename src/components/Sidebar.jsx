import React, { useState, useEffect } from "react";

const Sidebar = ({ data, currentIndex, onClick }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const handleCategoryClick = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  const groupedData = data.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const getActiveCategory = () => {
    const activeItem = data[currentIndex];
    return activeItem ? activeItem.category : null;
  };

  useEffect(() => {
    const activeCategory = getActiveCategory();
    setOpenCategory(activeCategory);
  }, [currentIndex, data]);

  return (
    <div className="sidebar">
      <ul>
        {Object.keys(groupedData).map((category, categoryIndex) => (
          <li key={categoryIndex}>
            <div
              onClick={() => handleCategoryClick(category)}
              className="category"
            >
              {category}
            </div>

            {openCategory === category && (
              <ul className="category-items">
                {groupedData[category].map((item) => (
                  <li
                    key={item.id}
                    className={currentIndex === item.id ? "active" : ""}
                    onClick={() => onClick(item.id)}
                    style={{ paddingLeft: "20px" }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
