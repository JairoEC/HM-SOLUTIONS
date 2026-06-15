export type Button = {
  label: string;
  link: string;
  variant?: "desktop" | "mobile" | "primary";
};

export type Banner = {
  image: string;
  title: string;
  subtitle: string;
  button: Button;
};

export type ContentBlock = {
  title: string;
  paragraphs: readonly string[];
  image: string;
  buttons?: readonly Button[];
};

export type CategoryItem = {
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

export type ServiceDetail = {
  banner: Banner;
  mainContent: ContentBlock;
  logosTitle: string;
  logosButtons: readonly Button[];
  facility: ContentBlock;
  categories: readonly CategoryItem[];
};

type Props = ServiceDetail;

export const DetailSection = ({
  banner,
  mainContent,
  logosTitle,
  logosButtons,
  facility,
  categories,
}: Props) => {
  return (
    <>
      <div id="container-module-bannerServices">
        <img src={banner.image} alt={banner.title} />

        <div className="content-bannerServices">
          <h2>{banner.title}</h2>
          <h3>{banner.subtitle}</h3>

          <div className="btn-bannerServices">
            <a
              href={banner.button.link}
              target="_blank"
              rel="noreferrer"
            >
              {banner.button.label}
            </a>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div id="container-module-detailService">
        <div className="center">
          <div className="row-detailService">
            <div className="content">
              <h2>{mainContent.title}</h2>

              {mainContent.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              {mainContent.buttons && (
                <div className="btn-detailService">
                  {mainContent.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.link}
                      target="_blank"
                      rel="noreferrer"
                      className={btn.variant}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="image">
              <img src={mainContent.image} alt={mainContent.title} />
            </div>
          </div>
        </div>
      </div>

      <div id="container-module-logosServices">
        <div className="center">
          <div className="row-logosServices">
            <h2>{logosTitle}</h2>

            <div className="btn-logosServices">
              {logosButtons.map((btn, i) => (
                <a
                  key={i}
                  href={btn.link}
                  target="_blank"
                  rel="noreferrer"
                  className={btn.variant}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="container-module-facility">
        <div className="center">
          <div className="row-facility">
            <div className="image">
              <img src={facility.image} alt={facility.title} />
            </div>

            <div className="content">
              <h2>{facility.title}</h2>

              {facility.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

              {facility.buttons && (
                <div className="btn-facility">
                  {facility.buttons.map((btn, i) => (
                    <a
                      key={i}
                      href={btn.link}
                      target="_blank"
                      rel="noreferrer"
                      className={btn.variant}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div id="container-module-categoryService">
        <div className="center">
          <div className="row-categoryService">
            <div className="title-categoryService">
              <p>Haz click en cualquiera de</p>
              <h2>Nuestros Servicios</h2>
              <p>para ver más…</p>
            </div>

            <div className="groups-category">
              {categories.map((item, i) => (
                <div className="column-category" key={i}>
                  <a href={item.link}>
                    <img src={item.image} alt={item.title} />

                    <div className="text-category">
                      <h2>{item.title}</h2>
                      <p>{item.subtitle}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};