import React, { useState } from "react";
import { course } from "../../Data/course";
import FeatureCard from "../Cards/FeatureCard";

const subCategories = {
  "Sonic Corporation": {
    Sonar: ["Super Sonar SCS-22", "SCS-24", "SCS-50", "SCS-88", "SCS-18H", "KCS-60 Kompakt Sonar"],
    "Akıntı Ölçer": ["KDG-300"],
    "Balık Boyu Ölçer Balık": ["KSE - 110/210", "KSE-300"],
  },
  Suzuki: {
    "Alt Kategori A": ["Alt Alt Kategori A1", "Alt Alt Kategori A2"],
    "Alt Kategori B": [],
  },
  Saura: {
    "Alt Kategori X": ["Alt Alt Kategori X1"],
    "Alt Kategori Y": [],
    "Alt Kategori Z": ["Alt Alt Kategori Z1", "Alt Alt Kategori Z2"],
  },
  Koden: {
    "Kategori A1": ["Alt Alt Kategori A1"],
    "Kategori B1": [],
  },
  "Max Sea": {
    "Deniz Alt Kategori 1": [],
  },
  "BioSonics": {
    "Ses Alt Kategori 1": ["Alt Alt Ses Kategori"],
  },
  "Torkar Marin A.Ş.": {
    "Marine A": ["Alt Alt Marine 1"],
    "Marine B": [],
  },
};


function Feature() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [hoveredSubCategory, setHoveredSubCategory] = useState("");

  return (
    <section className="feature-course-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h4>Ürünlerimiz</h4>
          </div>
          <div className="col-md-10">
            <ul className="nav nav-pills mb-3 position-relative">
              <li className="nav-item">
                <a
                  className={`nav-link ${activeCategory === "All" ? "active" : ""}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory("All");
                  }}
                >
                  All
                </a>
              </li>
              {Object.keys(subCategories).map((category) => (
                <li
                  key={category}
                  className="nav-item dropdown"
                  onMouseEnter={() => setHoveredCategory(category)}
                  onMouseLeave={() => setHoveredCategory("")}
                >
                  <a
                    className={`nav-link dropdown-toggle ${activeCategory === category ? "active" : ""}`}
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(category);
                    }}
                  >
                    {category}
                  </a>
                  {hoveredCategory === category && (
                    <ul
                      className="dropdown-menu show position-absolute"
                      style={{
                        top: "100%",
                        left: 0,
                        marginTop: "0.125rem",
                        transform: "translateY(0)", // Ensure it appears right below the category
                      }}
                    >
                      {Object.keys(subCategories[category]).map((sub) => (
                        <li
                          key={sub}
                          className="dropdown-item dropdown"
                          onMouseEnter={() => setHoveredSubCategory(sub)}
                          onMouseLeave={() => setHoveredSubCategory("")}
                        >
                          <a
                            href="#"
                            className="dropdown-toggle"
                            onClick={(e) => {
                              e.preventDefault();
                              setActiveCategory(sub);
                            }}
                          >
                            {sub}
                          </a>
                          {hoveredSubCategory === sub && subCategories[category][sub].length > 0 && (
                            <ul
                              className="dropdown-menu show position-absolute"
                              style={{
                                top: "0",
                                left: "100%",
                                marginLeft: "0.125rem",
                                transform: "translateX(0)", // Sub-menu right alignment
                              }}
                            >
                              {subCategories[category][sub].map((altSub, index) => (
                                <li key={index}>
                                  <a
                                    href="#"
                                    className="dropdown-item"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setActiveCategory(altSub);
                                    }}
                                  >
                                    {altSub}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          {course
            ?.filter((course) =>
              activeCategory === "All"
                ? course
                : course.category.find((item) => item === activeCategory)
            )
            .map((course) => (
              <FeatureCard course={course} key={course.id} />
            ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
