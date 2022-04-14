import React, { useState } from "react";
import { FLAECHE, KALTMIETE, LANDLORD_NAME, WARMMIETE, ZI } from "../const";

const template = `Sehr geehrte Damen und Herren, geehrter Herr \${${LANDLORD_NAME}}

Mein Name ist Denis Malyshok und ich möchte mich als Bewerber für die oben genannte Wohnung vorstellen und würde sie gerne besichtigen.

Ich arbeite als Senior Software Developer bei GFG, mein derzeitiges Einkommen beträgt rund 3.500 Euro. Ich habe noch keine Kinder und rauche nicht.

Ich würde mich sehr über eine Rückmeldung freuen.

Vielen Dank!

Mit freundlichen Grüßen
Denis Malyshok`;

const template2 = `Sehr geehrte Damen und Herren, geehrte Frau contactName

Mein Name ist Denis Malyshok und ich möchte mich als Bewerber für die oben genannte Wohnung vorstellen und würde sie gerne besichtigen. 

Ich arbeite als Senior Software Developer bei GFG, mein derzeitiges Einkommen beträgt rund 3.500 Euro. Ich habe noch keine Kinder und rauche nicht.

Ich würde mich sehr über eine Rückmeldung freuen. 

Vielen Dank!

Mit freundlichen Grüßen
Denis Malyshok`;

const data = [{ template }, { template: template2 }];

const variablesData = [
  { name: LANDLORD_NAME, value: "Matthias Müller" },
  { name: KALTMIETE, value: "500 €" },
  { name: ZI, value: "2" },
  { name: FLAECHE, value: "50m" },
  { name: WARMMIETE, value: "700 €" },
];

const DataContext = React.createContext();

function DataProvider({ children }) {
  const [tabs, setTabs] = useState(data);
  const [variables, setVariables] = useState(variablesData);
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);

  return (
    <DataContext.Provider
      value={{
        tabs,
        setTabs,
        variables,
        setVariables,
        active,
        setActive,
        position,
        setPosition,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext };
