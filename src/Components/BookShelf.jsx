import { useState } from "react";
const Bookshelf = ({ section, books, onChangeSelection }) => {
  const [prevSelf, setPreSelf] = useState(section);
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{section}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: book.background,
                    }}
                  ></div>
                  <div className="book-shelf-changer">
                    <select
                      onChange={(event) => {
                        onChangeSelection(book, event.target.value, prevSelf);
                        setPreSelf(event.target.value);
                      }}
                    >
                      <option value="none" disabled>
                        Move to...
                      </option>
                      <option
                        value="currentlyReading"
                        selected={section === "Currently Reading"}
                      >
                        Currently Reading
                      </option>
                      <option
                        value="wantToRead"
                        selected={section === "Want To Read"}
                      >
                        Want to Read
                      </option>
                      <option value="read" selected={section === "Read"}>
                        Read
                      </option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.bookTitle}</div>
                <div className="book-authors">{book.bookAuthors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
export default Bookshelf;
