const book1 = {
    title: "Толкование сновидений",
    description: "Сновидение — «царская дорога» к познанию бессознательного. В нём всегда присутствует смысл, находят отражение наши желания. Психоанализ объясняет природу этой загадки, раскрывая тайну сна.",
    author: "Зигмунд Фрейд",
  };
  const book2 = {
    title: "Дневник памяти",
    description: "Основанный на реальных событиях роман Николаса Спаркса, опубликованный в 1996 году. В 2004 году роман был экранизирован режиссёром Ником Кассаветисом. ",
    author: "Николас Спаркса",
  };
  const book3 = {
    title: "Академия вампиров",
    description: "«Академия вампиров» — серия романтических книг о вампирах, созданная американской писательницей Райчел Мид. Первый роман был опубликован в 2007 году.",
    author: "Райчел Мид",
  };
  const book4 = {
    title: "Доктор сон",
    description: "Роман американского писателя Стивена Кинга, продолжение истории романа «Сияние». В США роман поступил в продажу 24 сентября 2013 г. Стивен Кинг посвятил книгу американскому рок-музыканту Уоррену Зивону.",
    author: "Стивен Кинг",
  };
  
  beforeEach(() => {
    
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
  });
  
  describe("Favorite books testing", () => {
    it("Should add book to favorite through function 'add new'", () => {
      cy.addBook(book1);
      cy.visit("/favorites");
      cy.get(".card-title").should("contain.text", book1.title);
    });
  
    it("Should delete book from favorite", () => {
      cy.visit("/favorites");
      cy.contains(book1.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.contains(book1.title).should("not.exist");
    });
  
    it("Should add book to favorite through 'Book list' page", () => {
      cy.addBookNoFavorite(book2);
      cy.contains(book2.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.visit("/favorites");
      cy.contains(book2.title).should("be.visible");
    });
  
    it("Should remove all favorite books", () => {
      cy.addBook(book3);
      cy.addBook(book4);
      cy.removeAllFavorite();
      cy.contains("Please add some book to favorit on home page!").should("exist");
    });
  });