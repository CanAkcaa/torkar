import React, { useState } from "react";
import { Menu, MenuProps } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { course } from "../../Data/course";
import FeatureCard from "../Cards/FeatureCard";

const items = [
  {
    key: "1",
    label: "Sonic Corporation",
    children: [
      {
        key: "11",
        label: "Sonar",
        children: [
          { key: "221", label: "Super Sonar SCS-22" },
          { key: "222", label: "SCS-24" },
          { key: "223", label: "SCS-50" },
          { key: "224", label: "SCS-88" },
          { key: "225", label: "SCS-18H" },
          { key: "226", label: "KCS-60 Kompakt Sonar" },
        ],
      },
      {
        key: "227",
        label: "Akıntı Ölçer",
        children: [{ key: "228", label: "KDG-300" }],
      },
      {
        key: "229",
        label: "Balık Boyu Ölçer Balık Bulucu",
        children: [
          { key: "230", label: "KSE - 110/210" },
          { key: "231", label: "KSE-300" },
        ],
      },
    ],
  },
  {
    key: "2",
    label: "Suzuki",
    children: [
      {
        key: "232",
        label: "Balık Bulucu",
        children: [
          { key: "234", label: "ES-675" },
          { key: "235", label: "ES-2035 ||" },
          { key: "236", label: "ES7200" },
          { key: "237", label: "ES-8600" },
        ],
      },
      {
        key: "238",
        label: "Sonar",
        children: [
          { key: "239", label: "S-1400" },
          { key: "240", label: "S-1900" },
        ],
      },
    ],
  },
  {
    key: '3',
    label: 'Saura',
    children: [
          { key: '242', label: 'SA-10'}
    ],
  },
  {
    key: '4',
    label: 'Koden',
    children: [
          { key: '244', label: 'Deniz Radarı'},
          { key: '245', label: 'Genişbant Balık Bulucu', children: [
          { key: '246', label: 'CVS-FX2'},
    ]},
    ],
  },
  {
    key: '5',
    label: 'MaxSea',
    children: [
          { key: '248', label: 'TimeZero Plot'},
    ],
  },
  {
    key: '6',
    label: 'BioSonics'
  },
  {
    key: '7',
    label: 'Torkar Marin A.Ş.',
    children: [
          { key: '248', label: 'İletişim'}
    ],
  },
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);
function Feature() {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleMenuClick = ({ key }: { key: string }) => {
    setActiveCategory(key);
  };

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <section className="feature-course-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>Ürünlerimiz</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
          <Menu
              mode="inline"
              defaultSelectedKeys={['221']}
              openKeys={stateOpenKeys}
              onOpenChange={onOpenChange}
              style={{ width: 256 }}
              items={items}
            />
          </div>
          <div className="col-md-9">
          <div className="row">
            {course
              ?.filter((course) =>
                activeCategory === "All"
                  ? true
                  : course.category.includes(activeCategory)
              )
              .map((course) => (
                <FeatureCard course={course} key={course.id} />
              ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Feature;
