import React, { useState } from "react";
import "./Reviews.css";

export default function Reviews() {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Juan Pérez", rating: 5, comment: "¡Excelentes zapatillas! Muy cómodas y de buena calidad." },
    { id: 2, name: "María López", rating: 4, comment: "Muy lindas, pero el envío tardó un poco." },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;

    setReviews([
      ...reviews,
      { id: Date.now(), ...newReview }
    ]);

    setNewReview({ name: "", rating: 5, comment: "" });
  };

  return (
    <div className="reviews-page">
      <h1>Reseñas de Nuestros Clientes</h1>

      <div className="reviews-container">

        <div className="reviews-list">
          {reviews.map((r) => (
            <div key={r.id} className="review-card">
              <h3>{r.name}</h3>
              <p className="rating">
                {"⭐".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
              </p>
              <p>{r.comment}</p>
            </div>
          ))}
        </div>

   
        <div className="review-form">
          <h2>Deja tu Reseña</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Tu nombre"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              required
            />
            <select
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
            >
              <option value="5">⭐ ⭐ ⭐ ⭐ ⭐</option>
              <option value="4">⭐ ⭐ ⭐ ⭐</option>
              <option value="3">⭐ ⭐ ⭐</option>
              <option value="2">⭐ ⭐</option>
              <option value="1">⭐</option>
            </select>
            <textarea
              placeholder="Escribe tu comentario..."
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              required
            />
            <button type="submit">Enviar Reseña</button>
          </form>
        </div>
      </div>
    </div>
  );
}

