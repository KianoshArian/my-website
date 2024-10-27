import './styles.css'
import discworld from '../../assets/books/discworld.jpg'
import twot from '../../assets/books/wheel of time.jpg'
import mistborn from '../../assets/books/mistborn.webp'
import tkkc from '../../assets/books/name of the wind.jpg'
import tbp from '../../assets/books/three body problem.jpg'
import tgbs from '../../assets/books/green bone saga.jpg'
import tsom from '../../assets/books/ship of magic.jpg'
import hitchhikers from '../../assets/books/hitchhikers.jpg'

export const BookReviews = () => {
  const books = [
    {src: discworld, alt: "discworld"}, 
    {src: tbp, alt: "three body problem"},  
    {src: tgbs, alt: "the green bone saga"}, 
    {src: mistborn, alt: "mistborn"}, 
    {src: tkkc, alt: "the kingkiller chronicles"},
    {src: twot, alt: "the wheel of time"}, 
    {src: tsom, alt: "the ship of magic"}, 
    {src: hitchhikers, alt: "hitchhiker's guide to the galaxy"},

  ]

  return (
    <div className='bookreview-page'>
      <h2>
      This Section is Under Construction and Will be Completed Soon.
      </h2>
      <h2>
        For Now, Here are Some of My Favorite Books!
      </h2>
      <div className='books'>
        {books.map((book, index) =>
          <img key={index} src={book.src} alt={book.alt} className='book'/>
        )}
      </div>
    </div>
  );
}
