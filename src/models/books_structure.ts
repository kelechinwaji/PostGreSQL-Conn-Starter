import client from "../database";

export type Book = {
  id: number;
  title: string;
  author: string;
  total_pages: number;
  summary: string;
};

export class AdventureBookStore {
  async index(): Promise<Book[]> {
    try {
      const conn = await client.connect();
      const sql = "SELECT * FROM district_area";
      const res = await conn.query(sql);
      const close = conn.release();
      return res.rows;
    } catch (error) {
      throw new Error(`could not connect\fetch data from db ${error}`);
    }
  }

  async create(book: Book) {
    try {
      const conn = await client.connect();
      const text =
        "INSERT INTO district_area(title, author, total_pages, summary) VALUES($1, $2, $3, $4) RETURNING *";
      const values = [book.title, book.author, book.total_pages, book.summary];
      const res = await conn.query(text, values);
      const close = conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Could not add new book ${book.title}. Error: ${error}`);
    }
  }

  async update(book: Book) {
    try {
      const conn = await client.connect();
      const text =
        "UPDATE district_area  SET title = $1, author = $2, total_pages = $3, summary = $4, WHERE id = $5 RETURNING *";
      const values = [book.title, book.author, book.total_pages, book.summary];
      const res = await conn.query(text, values);
      const close = conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Could not update book ${book.title}. Error: ${error}`);
    }
  }

  async delete(book: Book) {
    try {
      const conn = await client.connect();
      const text = "DELETE FROM district_area WHERE id = $1 RETURNING *";
      const values = [book.id];
      const res = await conn.query(text, values);
      const close = conn.release();
      return res.rows[0];
    } catch (error) {
      throw new Error(`Could not delete book ${book.title}. Error: ${error}`);
    }
  }
}
