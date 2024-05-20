//lib
import { useState, useEffect } from "react";

//style
import "./App.css";

//components
import Footer from "./components/Footer";
import Card from "./components/Card";

function App() {
  const [selectMotoImg, setSelectMotoImg] = useState([]);

  const [MotorcycleList, setMotorcycleList] = useState([]);

  //選択されたカスタムパーツ imgPathを保持
  const [attachCustoms, setAttachCustoms] = useState([]);

  console.log(attachCustoms);

  useEffect(() => {
    fetch("/json/motorcycle.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((jsonData) => {
        console.log(jsonData);
        setMotorcycleList(jsonData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <section>
        <div className="flex w-full flex-row flex-wrap">
          {MotorcycleList.map((motorcycle) => (
            <div
              key={motorcycle.id}
              className="card bg-base-100 shadow-xl"
              onClick={() => {
                setSelectMotoImg(motorcycle.image);
                document.getElementById("my_modal_1").showModal();
              }}
            >
              <div className="card-body">
                <h2 className="card-title text-3xl">
                  {motorcycle.name}&nbsp;
                  {`(${motorcycle.model_year})`}
                </h2>
              </div>
              <figure>
                {attachCustoms.map((partsImg) => (
                  <>
                    <img src={partsImg} style={{ position: "absolute" }} />
                  </>
                ))}
                <img src={motorcycle.image[1]} alt={motorcycle.name} />
              </figure>
            </div>
          ))}
        </div>
      </section>

      {MotorcycleList.map((motorcycle) => (
        <Card
          key={motorcycle.id}
          MotorcycleList={motorcycle}
          attachCustoms={attachCustoms}
          setAttachCustoms={setAttachCustoms}
        />
      ))}
      {/* 見栄えだけのフッター */}
      <Footer />
    </div>
  );
}

export default App;
