// import React from 'react'
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button,Modal} from 'react-bootstrap';
// import { Header } from './header'
// import {useState} from 'react';
// // import DataTable from 'react-data-table-component'
// import { styled } from '@mui/material/styles';
// import {Table, TableBody, TableFooter, TableCell, TableContainer, TableHead, TableRow, Paper, tableCellClasses, TablePagination} from '@mui/material'

// export function Adm_tren() {

//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//     const [values , setValues] = useState({
//         hora: '',
//         fecha: '',
//         origin: '',
//         n_tren: '',
//         cupo: '',
//     });

//     const handleInput = (event) =>{
//        const { name, value } = event.target;
//        console.log(name, value);
//        setValues({
//         // reinicia los valores y creo una copia
//         ...values,
//         [name]: value,
//        });
//     }

//     const handleForm = (event) =>{
//         event.preventDefault();
//         console.log(values);
//     }
  

//   //estados para mostrar las modal de registro y actu

//   const [modalShow, setModalShow] = useState(false);
//   const [show, setShow] = useState(false);
 
//   const ShowModelInser = () => setModalShow(true); 
 
//   const ShowModelInser1 = () => setShow(true); 
    
//   const handleClose = () => {
//     setShow(false)
//     setModalShow(false)
//   };


//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 14,
//     },
//   }));
  
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));
  
//   function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
//   }
  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//      createData('Gingerbread', 356, 16.0, 49, 3.9), createData('Gingerbread', 356, 16.0, 49, 3.9),
//      createData('Gingerbread', 356, 16.0, 49, 3.9),
//      createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];
  
//   return (
//     <>
//         <Header />
//         <TableContainer component={Paper} sx={{ minWidth: 950 }}>
//       <Table sx={{ minWidth: 700 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>Dessert (100g serving)</StyledTableCell>
//             <StyledTableCell align="right">Calories</StyledTableCell>
//             <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
//             <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows
//             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//             .map((row) => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="right">{row.calories}</StyledTableCell>
//               <StyledTableCell align="right">{row.fat}</StyledTableCell>
//               <StyledTableCell align="right">{row.carbs}</StyledTableCell>
//               <StyledTableCell align="right">{row.protein}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//         <TableFooter>
//         <TablePagination
//         rowsPerPageOptions={[5, 10, 15]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//         </TableFooter>
//       </Table>
//     </TableContainer>
        
//     </>
//     )
// }
