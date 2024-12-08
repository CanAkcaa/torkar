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

const productDetails = {
  "221": {
    name: "Super Sonar SCS-22",
    img: '../../../public/assets/images/homeProducts/scs22.png',
    description: "SUPER SONAR ™   Düşük frekans, Uzun mesafe  ( 21 & 24 kHz )",
    features: ["Tüm balık çeşitleri ve orkinos avcılığı için", "Ayarlanabilir frekans", "Gelişmiş TX/RX stabilize fonksiyonu","Balık türü ve balıkçılık yöntemlerine bağlı olarak seçilebilir farklı görüntüleme modları ve çift ekran modu", "Seçilebilir istenilen görüntü işleme hafıza seçenekleri", "Gereksiz parazitleri mümkün olan en düşük seviyeye minimize etme", "Yüksek hızlı gemi ve balık ile uyumlu yüksek hızda iletim döngüleri", "Kullanıcı dostu minyatür kontrol ünitesi", "Gelişmiş kesit görüntüsü", "Transduseri korumak için güvenilir paslanmaz kılıf"],
    images: [
      { title: "Dual Görüntü Modu", image: "http://www.torkarmarin.com/uploaded/userfiles/images/DualViewMode.jpg" },
      { title: "Dikey genişletilmiş görüntü modu", image: "http://www.torkarmarin.com/uploaded/userfiles/images/EnlargedVerticalPictureMode%20.jpg" },
      { title: "Balık sürüsü bilgisi", image: "http://www.torkarmarin.com/uploaded/userfiles/images/Fishschoolinformation.jpg" },
      { title: "Stabilizasyon fonksiyonu", image: "http://www.torkarmarin.com/uploaded/userfiles/images/stabilizationfunction.jpg" },
      {image:"http://www.torkarmarin.com/uploaded/userfiles/images/SCS-22diagram.png"}
    ],
    pdfLinks: [
      { title: "Kullanım Kılavuzu", url: "../../../public/assets/pdfs/products/scs22/scs22-1.pdf" },
      { title: "Broşur", url: "../../../public/assets/pdfs/products/scs22/scs22-2.pdf" }
    ],
    imgUrl: [
      { title: "I-127 LCD EKRAN ÖLÇÜLERİ", url: '../../../public/assets/images/homeProducts/sonicDisplay.jpg'}
    ]
  },
  "222": {
    name: "SCS-24",
    description: "UZUN MESAFE 360° SONAR (24 kHz)",
    img: '../../../public/assets/images/homeProducts/scs24.png',
    features: ["217 dB 7KW", "Balıkçılık tarzı ve koşullarına uygun ayarları geri çağırmak için tek dokunuşlu hafıza tuşları", "Yüksek çözünürlüklü hassas LCD monitör ve kolay kullanımlı kontrol ünitesi", "Tümleşik verici ve alıcı ünitesi ile alan tasarrufu ve kolay montaj", "Çeşitli ekran modu; Tam ekran, Çoklu ekran, Balık bulucu ekran", "Güvenlik sunan kılavuz halkası ile gövde ünitesi"],
    images: [
      { image: "http://www.torkarmarin.com/uploaded/userfiles/images/SCS-24diagram.png" },
    ],
    pdfLinks: [
      { title: "Kullanım Kılavuzu", url: "../../../public/assets/pdfs/products/scs24/scs24-1.pdf" },
      { title: "Broşur", url: "../../../public/assets/pdfs/products/scs24/scs24-2.pdf" }
    ],
    imgUrl: [
      { title: "I-127 LCD EKRAN ÖLÇÜLERİ", url: '../../../public/assets/images/homeProducts/sonicDisplay.jpg'}
    ]
  },
  // Diğer ürünlerin detayları burada olacak...
};
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
  const [selectedProduct, setSelectedProduct] = useState<string | null>("221"); // Burada "222" scs24'ün anahtarını temsil eder.

  const handleMenuClick = ({ key }: { key: string }) => {
    setActiveCategory(key);
    setSelectedProduct(key); // Seçilen ürünü günceller
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

  const getProductDetails = (key: string) => {
    return productDetails[key];
  };
  return (
    <section className="feature-course-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>Ürünlerimiz</h4>
          </div>
        </div>
        <div className="row">
          {/* Menu on small screens will take full width */}
          <div className="col-12 col-md-3">
            <Menu
              mode="inline"
              defaultSelectedKeys={['221']}
              openKeys={stateOpenKeys}
              onOpenChange={onOpenChange}
              onClick={handleMenuClick}
              style={{ width: '100%' }}
              items={items}
            />
          </div>

          {/* Content will adjust to take remaining space */}
          <div className="col-12 col-md-9">
            {selectedProduct && (
              <div className="product-details">
                <h3>{getProductDetails(selectedProduct)?.name}</h3>
                <p>{getProductDetails(selectedProduct)?.description}</p>
                <img src={getProductDetails(selectedProduct)?.img} alt={getProductDetails(selectedProduct)?.name} style={{ maxWidth: '100%' }} />
                <div className="product-images mt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  {getProductDetails(selectedProduct)?.pdfLinks.map((pdf, index) => (
                    <div key={index}>
                      <a href={pdf.url} style={{ textDecoration: 'underline', color: '#007bff' }} target="_blank" rel="noopener noreferrer">
                        {pdf.title}
                      </a>
                    </div>
                  ))}
                </div>
                <ul className="mt-4">
                  {getProductDetails(selectedProduct)?.features?.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="product-images" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {getProductDetails(selectedProduct)?.images?.map((image, index) => (
                    <div key={index} className="d-flex justify-content-center flex-column align-items-center" style={{ marginBottom: "15px", width:'40%' }}>
                      <h6 className="d-flex justify-content-center">{image.title}</h6>
                      <img
                        className="d-flex justify-content-center align-items-center"
                        src={image.image}
                        alt={image.title}
                        style={{ width: "150px", height: "150px", display:'flex', justifyContent:'center' }}
                      />
                    </div>
                  ))}
                  </div>
                <div className="product-images mt-4" style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                  {getProductDetails(selectedProduct)?.imgUrl?.map((img, index) => (
                    <div key={index}>
                      <a href={img.url} style={{ textDecoration: 'underline', color: '#007bff' }} target="_blank" rel="noopener noreferrer">
                        {img.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
  
}

export default Feature;
