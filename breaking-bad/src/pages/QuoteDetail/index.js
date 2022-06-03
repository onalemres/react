import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { quotesSelector } from "../../redux/quotesSlice";

function QuoteDetail() {
  const { quote_id } = useParams();

  const navigate = useNavigate();
  const items = useSelector(quotesSelector);

  const quote = items.find((item) => item.quote_id === Number(quote_id));

  useEffect(() => {
    if (!quote) {
      return navigate(-1);
    }
  }, [quote, navigate]);

  return (
    <div>
      <h1>QuoteDetail</h1>
      <pre>{JSON.stringify(quote, null, 2)}</pre>
    </div>
  );
}

export default QuoteDetail;
