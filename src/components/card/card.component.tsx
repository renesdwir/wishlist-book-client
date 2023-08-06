import { Rating } from "@smastrom/react-rating";
import {
  Author,
  Button,
  CardContainer,
  ContentCard,
  Star,
  Title,
} from "./card.styled";
import {
  addWishlist,
  deleteFromWishlist,
} from "../../store/wishlist/wishlist.action";
import { useAppDispatch } from "../../hooks/hooks";
interface CardProps {
  book: {
    authors: string;
    averageRating: number;
    bookId: string;
    ratingsCount: number;
    thumbnail: string;
    title: string;
    _id: string | undefined;
  };
}

const Card = (props: CardProps) => {
  const dispatch = useAppDispatch();
  const {
    authors,
    averageRating,
    bookId,
    ratingsCount,
    thumbnail,
    title,
    _id,
  } = props.book;
  const handleButtonClick = () => {
    if (_id) {
      dispatch(deleteFromWishlist(bookId));
    } else {
      dispatch(
        addWishlist({
          authors,
          averageRating,
          bookId,
          ratingsCount,
          thumbnail,
          title,
        })
      );
    }
  };
  return (
    <CardContainer>
      <img src={thumbnail} alt="test" />
      <ContentCard>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            flexGrow: 1,
            paddingBottom: "20px",
          }}
        >
          <div>
            <Author>{authors}</Author>
            <Title maxLine="2" ellipsis=" ..." text={title} />
          </div>
          <Star>
            <Rating style={{ maxWidth: 100 }} value={averageRating} readOnly />
            <span style={{ fontSize: ".8rem", marginLeft: "5px" }}>
              ({ratingsCount ?? 0})
            </span>
          </Star>
        </div>
        <Button onClick={handleButtonClick}>
          <span style={{ backgroundColor: _id ? "#e11d48" : "#ec4899" }}></span>
          <span>{_id ? "Remove from wishlist" : "Add to wishlist"}</span>
        </Button>
      </ContentCard>
    </CardContainer>
  );
};

export default Card;
