import React from "react";
import Input from "./Form/Input";
import Header from "./Header/Header";
import style from "./Anime.module.css";
import Select from "./Form/Select";
import { Link } from "react-router-dom";

const Anime = () => {
  const [data, setData] = React.useState(null);
  const [dataList, setDataList] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [value, setValue] = React.useState("");
  const [select, setSelect] = React.useState("");


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.jikan.moe/v4/random/anime");
        const json = await response.json();
        setData(json.data);
      } catch (erro) {
        setError("Um Erro ocorreu");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://api.jikan.moe/v4/anime");
        const json = await response.json();
        setDataList(json.data);
      } catch (error) {
        setError("Um Erro ocorreu");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (value.length) {
        setError(null);
        setValue("");
        setDataList(null);
        setData(null);
        setLoading(true);
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${value}`,
        );
        const json = await response.json();
        if(json.data.length === 0){
          setError('Anime not found')
        }
        setData(json.data[0]);
        setDataList(json.data);
      }
    } catch (error) {
      setError("The requested service is not available");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="main">
      <Header
        placeholder="Search Anime"
        id="text"
        setValue={setValue}
        handleSubmit={handleSubmit}
        value={value}
      />
      <section className={style.animeBg}>
        {loading && (
          <div className="skeletonContainer">
            <div className="skeletonImg skeleton"></div>
            <div className="skeletonTextContainer">
              <div>
                <div className="skeleton skeletonText"></div>
                <div className="skeleton skeletonText"></div>
              </div>
              <div>
                <div className="skeleton skeletonText"></div>
                <div className="skeleton skeletonText"></div>
                <div className="skeleton skeletonText"></div>
              </div>
              <div>
                <div className="skeleton skeletonText"></div>
              </div>
            </div>
          </div>
        )}
        {error && <h1 className="error">{error}</h1>}
        {data && (
          <div className={style.anime}>
            <img src={data.images.webp.large_image_url} />
            <div className={style.animeInfo}>
              <div className={style.animeTitle}>
                <h1>{data.title}</h1>
                {data.rating && <span>{data.rating.substring(0, 6)}</span>}
                <span>{data.status}</span>
              </div>
              {data.synopsis && <p>{data.synopsis.substring(0, 250)}</p>}
              <div className="animeGenres">
                {data.genres.map(({ name }, index) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
      <section className={style.animeBg}>
        <div className={style.animesSelect}>
          <h1>Animes</h1>
          <form>
            <Select
              options={["Animes", "Popular"]}
              value={select}
              setSelect={setSelect}
            />
          </form>
        </div>
        {loading && (
          <div className="gridSkeletonList">
            <div className="skeletonListContainer">
              <div className="skeletonImgList skeleton"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
            </div>
            <div className="skeletonListContainer">
              <div className="skeletonImgList skeleton"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
            </div>
            <div className="skeletonListContainer">
              <div className="skeletonImgList skeleton"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
            </div>
            <div className="skeletonListContainer">
              <div className="skeletonImgList skeleton"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
            </div>
            <div className="skeletonListContainer">
              <div className="skeletonImgList skeleton"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
              <div className="skeleton skeletonTextList"></div>
            </div>
          </div>
        )}
        {dataList && (
          <div className={style.animeListBg}>
            {dataList.map((item) => (
              <div key={item.mal_id} className={style.animeList}>
                <img src={item.images.webp.large_image_url} alt={item.title} />
                <h2>{item.title}</h2>
                <div className={style.animeListStatus}>
                  <span>Status</span>
                  <span>{item.status}</span>
                </div>
                <div className="animeGenres">
                  {item.genres.map(({ name, mal_id }) => (
                    <span key={mal_id}>{name}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Anime;
