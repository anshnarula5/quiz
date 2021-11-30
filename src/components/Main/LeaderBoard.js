import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { db } from "../../firebase-config";
import { collection, getDocs } from "@firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { fetch_users } from "../../redux/actions/auth";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import Theme from "../UI/Theme";

export default function LeaderBoard() {
  const dispatch = useDispatch();
  let { users, loading } = useSelector((state) => state.auth);
  
  React.useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push({ name: doc.id, hs: doc.data().hs });
      });
      dispatch(fetch_users(users));
    };
    getData();
  }, [dispatch]);
  users = users.sort((a, b) => b.hs - a.hs);
  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 25,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Theme>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">High Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.name}
                </TableCell>
                <TableCell align="right">{user.hs}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Theme>
  );
}
