import React, { useState } from 'react';

function DescriptionSection() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <section>
      <h2>Sección Descripción</h2>
      <div className={showFullDescription ? "visible" : "hidden"}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita harum quaerat corrupti porro maxime id ipsam vero odio pariatur, non veniam ducimus laborum obcaecati inventore rem, alias nihil cum autem!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum ullam quam porro sed tempore, error aliquam modi exercitationem voluptatibus, eum suscipit quos nam accusamus, dolor pariatur quasi. Ut, aperiam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et illum distinctio placeat velit vel repudiandae quae consequuntur quaerat, adipisci sint, consequatur dolorem perspiciatis veniam quo architecto. Voluptates labore temporibus corrupti!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, debitis repellendus dolore voluptates beatae repudiandae facilis velit saepe, quas laborum reprehenderit harum eius quidem magni illum non, sequi aut neque.
        </p>
      </div>
      <a className="show-more" onClick={handleToggleDescription}>
        {showFullDescription ? "Ocultar descripción completa" : "Ver descripción completa"}
      </a>
      <br />
      <hr />
      <br />
      {}
    </section>
  );
}

export default DescriptionSection;
