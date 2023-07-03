import { Button } from "react-bootstrap";
import { auth } from "../../../store/localStorage";


function SignOut(): JSX.Element {

  const handleClick = () => {
      auth.removeData();
      window.location.assign("/signin");
  };

  return (
    <Button variant = "danger" onClick={handleClick}>
      Sign Out
    </Button>
  );
}

export default SignOut;
