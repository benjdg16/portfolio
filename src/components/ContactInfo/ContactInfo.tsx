import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

import "./ContactInfo.css";

export interface IContactInfo {
  faLogoClass: string | IconDefinition;
  title: string;
  text: string;
  link: string;
  linkText: string;
}

const ContactInfo = ({
  faLogoClass,
  title,
  text,
  link,
  linkText,
}: IContactInfo) => {
  const anchorRef = useRef<HTMLAnchorElement>(null);
  const handleClick = () => {
    if (anchorRef.current) {
      anchorRef.current.click();
    }
  };

  const isMailLink = (link: string): boolean => {
    return link.includes("mailto:");
  };

  return (
    <button className="contact-info" type="button" onClick={handleClick}>
      <div className="contact-info-header">
        <div className="contact-info-logo">
          <FontAwesomeIcon icon={faLogoClass as IconProp} />
        </div>
        <div className="contact-info-title">{title}</div>
      </div>
      <div className="contact-info-text">{text}</div>
      <div className="contact-info-link">
        <a
          href={link}
          target={isMailLink(link) ? undefined : "_blank"}
          rel={isMailLink(link) ? undefined : "noreferrer"}
          ref={anchorRef}
        >
          {linkText}
        </a>
      </div>
    </button>
  );
};

export default ContactInfo;
