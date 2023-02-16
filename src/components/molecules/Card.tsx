import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { BackCard } from "../atoms/BackCard";
import { FrontCard } from "../atoms/FrontCard";
import { useCharactersResultContext } from "../context/CardContext";

const useStyles = makeStyles(() => ({
  cardContainer: {
    alignItems: "center",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "2em",
  },
  characterDiscribe: {
    alignItems: "center",
    background: "radial-gradient(circle, rgba(10,21,10,0.29744397759103647) 0%, rgba(14,29,17,0.7008053221288515) 100%)",
    borderRadius: "5%",
    borderStyle: "solid",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    fontFamily: "Klee One",
    justifyContent: "center",
    margin: "1em",
    padding: "1em",
    width: "20em",
    "& img": {
      borderRadius: "50%",
      marginBottom: "0.6em",
      width: "30%",
    }
  }
}))

export const Card = ({ image, name, species, status, type }: any) => {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div style={{ paddingBottom: "20px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className={classes.cardContainer}>
        <ReactCardFlip isFlipped={isFlipped}>
          <div onClick={() => setIsFlipped(true)}>
            <FrontCard image={image} />
          </div>
          <div onClick={() => setIsFlipped(false)}>
            <BackCard name={name} species={species} status={status} type={type} />
          </div>
        </ReactCardFlip >
      </div>

    </div>
  )
}
