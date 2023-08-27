import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Button from "../Responsive/Button";
import Typography from "@mui/material/Typography";
import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';
import logo from "../images/iitglogo.png";

const CompanyJobCard = ({ alljob, job }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
  };
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        marginTop: "10px",
        marginBottom: "2rem",
        boxShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px;",
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100, margin: "20px" }}
        image={logo}
        alt="logo"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            {alljob && (
              <Typography component="div" variant="h5">
                ABCD
              </Typography>
            )}
            {job && (
              <Typography component="div" variant="h5">
                ABCD
              </Typography>
            )}

            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Status: 
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Company: Stonks Fintech
            </Typography>
          </CardContent>
        </Box>
        <CardActions>
          {job && (
            <Link to={`/jobs/${job._id}`} className="mr-4">
              <Button
                variant="contained"
                sx={{ backgroundColor: "#3acbf7", marginRight: "10px" }}
              >
                View Post
              </Button>
            </Link>
          )}
          {alljob ? (
            <>
                <Button
                  variant="contained" 
                  onClick={handleOpen}
                  sx={{ backgroundColor: "#3acbf7", marginRight: "10px" }}
                >
                  View Response
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                  </Box>
              </Modal>
              <Link to={`/company/${alljob.userId}`} className="mr-4">
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#3acbf7", marginRight: "10px" }}
                >
                  Company Details
                </Button>
              </Link>
            </>
          ) : (
            <>
            <Button
              onClick={handleOpen}
              sx={{
                backgroundColor: "#3acbf7",
                marginRight: "10px",
                marginLeft: "4px",
              }}
            >
              {" "}
              View Responses
            </Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
        </Modal>
        </>
          )}
        </CardActions>
      </Box>
    </Card>
  );
};

export default CompanyJobCard;