import React from 'react';


export default function Layout({ children }) {

  return (
    <div className="app-container">
      <header />
      <main>{children}</main>
      {/* Puedes agregar un footer u otros elementos del layout aquí */}
      <header />
      <menu />
      <main>{children}</main>
      <footer />
    </div>
  );
}