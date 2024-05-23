import { useEffect, useState } from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import Detail from "./components/Detail/Detail";
import List from "./components/List/List";
import Notification from "./components/Notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./library/firebase";
import { useUserStore } from "./library/userStore";
import { useChatStore } from "./library/chatStore";
import Loginn from "./components/Login/Loginn";

function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();
  const [detailShow, setDetailShow] = useState(false);

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  // console.log(currentUser);

  if (isLoading) return <div><i class="fa-duotone fa-spinner-third fa-spin-pulse"></i></div>;

  return (
    <div className="container">
      {currentUser ? (
        <>
          <List />

          {chatId && <Chat setDtl={setDetailShow} />}
          {detailShow && <Detail />}
        </>
      ) : (
         
        <Loginn></Loginn>
      )}
      <Notification />
    </div>
  );
}

export default App;
