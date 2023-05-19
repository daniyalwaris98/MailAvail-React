import React from "react";
import { Person } from "./Person";
export function NameList() {
  const list = [
    { id: 0, name: "Bruce" },
    { id: 1, name: " Diana" },
    { id: 2, name: " Wayne" },
  ];

  const personList = list.map((person) => (
    <Person key={person.id} person={person} />
  ));
  return <h2>{personList}</h2>;
}
