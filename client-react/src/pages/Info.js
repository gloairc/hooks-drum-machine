import React from "react";
// import DrumMachine from "../component/hypebeats/DrumMachine";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

//need to adust positioning for each popover

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const Info = () => {
  //   const disabled = false;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [popNum, setPopNum] = React.useState(-1);

  const handleClick = (event, itemNum) => {
    setAnchorEl(event.currentTarget);
    setPopNum(itemNum);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setPopNum(-1);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // const renderPopover = () => {
  //   return (

  //   );
  // };

  return (
    <>
      <h1>Info Help Page</h1>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 1)}
        >
          1.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 2)}
        >
          2.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 3)}
        >
          3.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 4)}
        >
          4.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 5)}
        >
          5.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 6)}
        >
          6.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 7)}
        >
          7.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 8)}
        >
          8.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 9)}
        >
          9.
        </Button>
      </div>
      <div>
        <Button
          aria-describedby={id}
          variant="contained"
          color="primary"
          onClick={(e) => handleClick(e, 10)}
        >
          10.
        </Button>
      </div>
      {/* {renderPopover} */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          {popNum === 1 && (
            <>
              <p>Add Grid Button</p>
              <p>Add a new grid page at the end of the sequence.</p>
              {console.log(popNum)}
            </>
          )}

          {popNum === 2 && (
            <>
              <p>Remove Instrument</p>
              <p>Remove an instrument from the grid.</p>
            </>
          )}
          {popNum === 3 && (
            <>
              <p>Preview Instrument</p>
              <p>
                Click on the icon to get an audio preview of the instrument.
              </p>
            </>
          )}
          {popNum === 4 && (
            <>
              {" "}
              <p>Add Instrument </p>
              <p>Add a new instrument to the grid.</p>
            </>
          )}
          {popNum === 5 && (
            <>
              <p>Clear Grid </p>
              <p>Reset all the instruments on the current grid page.</p>
            </>
          )}
          {popNum === 6 && (
            <>
              {" "}
              <p>Save </p>
              <p>Save your grid sequence to your account.</p>
            </>
          )}
          {popNum === 7 && (
            <>
              {" "}
              <p>Page Select </p>
              <p>View the different grid pages in your sequence.</p>
            </>
          )}
          {popNum === 8 && (
            <>
              <p>Play </p>
              <p>Play your grid sequence.</p>
            </>
          )}
          {popNum === 9 && (
            <>
              <p>Tempo Adjust </p>
              <p>Change the tempo of your sequence.</p>
            </>
          )}
          {popNum === 10 && (
            <>
              {" "}
              <p>Grid Selector </p>
              <p>
                Click on the grid element to configure when your instrument
                plays.
              </p>
            </>
          )}
        </Typography>
      </Popover>
    </>
  );
};

export default Info;
