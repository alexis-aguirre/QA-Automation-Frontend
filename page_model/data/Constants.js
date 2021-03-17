import dotenv from "dotenv";

dotenv.config();

export const CREDENTIALS = {
  VALID_USER: {
    USERNAME: process.env.VALID_USERNAME,
    PASSWORD: process.env.VALID_PASSWORD,
  },
  INVALID_USER: {
    USERNAME: process.env.INVALID_USERNAME,
    PASSWORD: process.env.INVALID_PASSWORD,
  },
};

export const MAIL_ADDRESS = {
  FIRSTNAME: process.env.FIRST_NAME,
  LASTNAME: process.env.LAST_NAME,
  ZIPCODE: process.env.ZIP_CODE,
};

export const BUYING_ITEMS = {
  ITEM01: process.env.ITEM_01,
  ITEM02: process.env.ITEM_02,
  ITEM03: process.env.ITEM_03,
};
