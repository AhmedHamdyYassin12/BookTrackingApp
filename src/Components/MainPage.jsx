import "../App.css";
import { useState, useEffect } from "react";
import Bookshelf from "./BookShelf";
const MainPage = ({ onSearchHandler }) => {
  const [currenlyReading, setCurrenlyReading] = useState([
    {
      bookTitle: "To Kill a Mockingbird",
      bookAuthors: "Harper Lee",
      background:
        'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
    },
    {
      bookTitle: "Ender's Game",
      bookAuthors: "Orson Scott Card",
      background:
        'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
    },
  ]);

  const [wantToRead, setWantToRead] = useState([
    {
      bookTitle: "1776",
      bookAuthors: "David McCullough",
      background:
        'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
    },
    {
      bookTitle: "Harry Potter and the Sorcerer's Stone",
      bookAuthors: "J.K. Rowling",
      background:
        'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
    },
  ]);

  const [read, setRead] = useState([
    {
      bookTitle: "The Hobbit",
      bookAuthors: "J.R.R. Tolkien",
      background:
        'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
    },
    {
      bookTitle: "Oh, the Places You'll Go!",
      bookAuthors: "Seuss",
      background:
        'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
    },
    {
      bookTitle: "The Adventures of Tom Sawyer",
      bookAuthors: "Mark Twain",
      background:
        'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
    },
  ]);
  const onChangeHandler = (book, shelf, prevSelf) => {
    if (shelf === "currentlyReading" && !currenlyReading.includes(book)) {
      setCurrenlyReading([...currenlyReading, book]);

      if (prevSelf === "wantToRead") {
        setWantToRead(wantToRead.filter((b) => b !== book));
      }
      if (prevSelf === "read") {
        setRead(read.filter((b) => b !== book));
      }
      console.log("currenlyReading", currenlyReading);
      console.log("wantto read", wantToRead);
      console.log("book", book);
      console.log("shelf", shelf);
      console.log("prevSelf", prevSelf);
    } else if (shelf === "wantToRead" && !wantToRead.includes(book)) {
      setWantToRead([...wantToRead, book]);

      if (prevSelf === "currentlyReading") {
        setCurrenlyReading(currenlyReading.filter((b) => b !== book));
      }
      if (prevSelf === "read") {
        setRead(read.filter((b) => b !== book));
      }
    } else if (shelf === "read" && !read.includes(book)) {
      setRead([...read, book]);

      if (prevSelf === "currentlyReading") {
        setCurrenlyReading(currenlyReading.filter((b) => b !== book));
      }
      if (prevSelf === "wantToRead") {
        setWantToRead(wantToRead.filter((b) => b !== book));
      }
    }
  };

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <Bookshelf
            section="Currently reading"
            books={currenlyReading}
            onChangeSelection={onChangeHandler}
          />
          <Bookshelf
            section="Want To Read"
            books={wantToRead}
            onChangeSelection={onChangeHandler}
          />
          <Bookshelf
            section="Read"
            books={read}
            onChangeSelection={onChangeHandler}
          />
        </div>
      </div>
      <div className="open-search">
        <a onClick={onSearchHandler}>Add a book</a>
      </div>
    </div>
  );
};
export default MainPage;
