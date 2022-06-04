import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { contactSelectors } from "../../redux/contactsSlice";
import EditForm from "./EditForm";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = useSelector((state) =>
    contactSelectors.selectById(state, id)
  );

  useEffect(() => {
    if (!contact) {
      navigate("/");
    }
  }, [contact, navigate]);

  return (
    <div>
      {contact && (
        <>
          <h1>Edit</h1>
          <EditForm contact={contact} />
        </>
      )}
    </div>
  );
}

export default Edit;
