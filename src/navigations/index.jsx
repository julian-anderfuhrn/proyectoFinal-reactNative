import { NavigationContainer } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchSession } from "../db";
import { setUser } from "../store/auth/auth.slice";

import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";

function RootNavigator() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);

  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSession();
        console.log(session);
        console.log(session);
        if (session?.rows.length) {
          const user = session.rows._array[0];
          dispatch(setUser(user));
        }
      } catch (error) {
        console.log("Error getting session");
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <NavigationContainer>
      {auth?.localId ? <TabsNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default RootNavigator;
