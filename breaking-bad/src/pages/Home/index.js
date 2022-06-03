import { useEffect } from "react";

import Masonry from "react-masonry-css";
import "./styles.css";

import Loading from "../../components/Loading";

import { useSelector, useDispatch } from "react-redux";
import { fetchCharacters } from "../../redux/charactersSlice";
import Error from "../../components/Error";

import { Link } from "react-router-dom";

function Home() {
  const characters = useSelector((state) => state.characters.items);
  const status = useSelector((state) => state.characters.status);
  const error = useSelector((state) => state.characters.error);
  const nextPage = useSelector((state) => state.characters.page);
  const hasNextPage = useSelector((state) => state.characters.hasNextPage);

  const dispatch = useDispatch();

  // home mount edildiğinde characterleri getirir
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCharacters());
    }
  }, [dispatch, status]);

  if (status === "failed") {
    return <Error message={error} />;
  }

  return (
    <div>
      <h1>characters</h1>
      <Masonry
        breakpointCols={4}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {characters.map((character) => (
          <div key={character.char_id}>
            <Link to={`/char/${character.char_id}`}>
              <img
                src={character.img}
                alt={character.name}
                className="character"
              />
              <div className="char_name">{character.name}</div>
            </Link>
          </div>
        ))}
      </Masonry>
      <div style={{ padding: "20px 0px 40px 0px", textAlign: "center" }}>
        {status === "loading" && <Loading />}
        {hasNextPage && status !== "loading" && (
          <button onClick={() => dispatch(fetchCharacters(nextPage))}>
            Load More...({nextPage})
          </button>
        )}
        {!hasNextPage && <div>There is nothing to be shown</div>}
      </div>
    </div>
  );
}

export default Home;
