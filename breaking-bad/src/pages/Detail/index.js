import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading";

function Detail() {
  const [char, setChar] = useState(null);
  const [loading, setLoading] = useState(true);

  const { char_id } = useParams();

  useEffect(() => {
    axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters/${char_id}`)
      .then((res) => res.data)
      .then((data) => setChar(data[0]))
      .finally(() => setLoading(false));
  }, [char_id]);
  console.log(char);
  return (
    <div>
      {loading && <Loading />}
      {char && (
        <div>
          <h1>{char.name}</h1>
          <img src={char.img} alt={char.name} style={{ width: "50%" }} />
          <br />
          <pre>{JSON.stringify(char, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Detail;
