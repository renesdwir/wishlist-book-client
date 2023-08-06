import Card from "../card/card.component";
import { CardListContainer, Preview, Title } from "./card-list.styled";
interface CardListProps {
  title?: string | undefined;
  books: any[];
}
const CardList = (props: CardListProps) => {
  const { title, books } = props;
  return (
    <CardListContainer>
      <Title>{title}</Title>
      <Preview>
        {books &&
          books.map((book: any) => <Card key={book.bookId} book={book} />)}
      </Preview>
    </CardListContainer>
  );
};

export default CardList;
