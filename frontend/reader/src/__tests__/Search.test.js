import {searchvalidity, lenval, split, match, popularity} from "../components/Search";

// Test for the validity of search input 
it('Searchvalidity test - content', () => {
    expect(searchvalidity("Agile")).toEqual("Agile"); 
    expect(searchvalidity("")).toEqual("Invalid Search"); 
}); 

// II Validity test 
it('Searchvalidity test - length ', () => {
    expect(lenval("Agile")).toEqual(1); 
    expect(lenval("qawsedrftgyhujkilopmnbvcxzaswqdefrbvcth6yiw")).toEqual(0); 
}); 

// Input split test 
it('Search split test', () => {
    expect(split("Agile scrum news")).toEqual(["Agile", "scrum","news"]); 
    expect(split("Agile")).toEqual("Agile"); 
}); 

// Match test 
it('Match test', () => {
    expect(match("Agile","Latest Agile news by the agile expert")).toEqual(2); 
    expect(match("Agile","Best HotDog in NYC")).toEqual(0); 
}); 

// Popularity test 
it('Popularity test', () => {
    expect(popularity("Agile",["Agile", "Police", "Blockchain"])).toEqual(["Agile", "Police", "Blockchain"]); 
    expect(popularity("Agile",["Police", "Blockchain"])).toEqual(["Police", "Blockchain","Agile"]); 
}); 
