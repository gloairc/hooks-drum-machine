import React from "react";
// import DrumMachine from "../component/hypebeats/DrumMachine";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

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

  return (
    <>
      <div className="pageTitle">
        <h1>Info Help Page</h1>
      </div>

      <div className="infoHelper">
        <div align="center">
          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            position="absolute"
            top={200}
            right="50%"
            onClick={(e) => handleClick(e, 1)}
          >
            1.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 1)}
          >
            1.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 2)}
          >
            2.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 3)}
          >
            3.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 4)}
          >
            4.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 5)}
          >
            5.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 6)}
          >
            6.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 7)}
          >
            7.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 8)}
          >
            8.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 9)}
          >
            9.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 10)}
          >
            10.
          </Button>
        </div>
        {/* <Grid
          container
          spacing={10}
          className="flexGrow"
          align="center"
          alignItems="center"
          justify="center"
        >
          <Grid container item xs={12} spacing={3} className="infoButtonsRow">
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 1)}
              >
                1.
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 2)}
              >
                2.
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 3)}
              >
                3.
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} className="infoButtonsRow">
            <Grid item xs={4}>
              {" "}
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 4)}
              >
                4.
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 5)}
              >
                5.
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 6)}
              >
                6.
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} className="infoButtonsRow">
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 7)}
              >
                7.
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 8)}
              >
                8.
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 9)}
              >
                9.
              </Button>
            </Grid>
          </Grid>
          <Grid container item xs={12} spacing={3} className="infoButtonsRow">
            <Grid item xs={4}>
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={(e) => handleClick(e, 10)}
              >
                10.
              </Button>
            </Grid>
            <Grid item xs={4}></Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            spacing={3}
            className="infoButtonsRow"
          ></Grid>
        </Grid> */}

        {/* <Grid container spacing={1} className="infoButtons">
          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 1)}
          >
            1.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 1)}
          >
            1.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 2)}
          >
            2.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 3)}
          >
            3.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 4)}
          >
            4.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 5)}
          >
            5.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 6)}
          >
            6.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 7)}
          >
            7.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 8)}
          >
            8.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 9)}
          >
            9.
          </Button>

          <Button
            aria-describedby={id}
            variant="contained"
            color="primary"
            onClick={(e) => handleClick(e, 10)}
          >
            10.
          </Button>
        </Grid> */}
      </div>
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
              <p>
                <b>
                  <u>Edit Title</u>
                </b>
              </p>
              <p>Change Name of sequence</p>
              {console.log(popNum)}
            </>
          )}

          {popNum === 2 && (
            <>
              <p>
                <b>
                  <u>Remove Instrument</u>
                </b>
              </p>
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
                <u>Click Once:</u>
                <br />
                Instrument will play on the selected grid element.
                <br />
                <br />
                <u>SHIFT + Click:</u>
                <br />
                Instrument will play a three-note roll on the selected grid.
              </p>
            </>
          )}
        </Typography>
      </Popover>
    </>
  );
};

export default Info;
