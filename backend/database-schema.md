## Database schema

### Article 
(PK) Article_ID (unique ID) 

(FK) Article_author(s) (list, since multiple authors possible)

Article_title (text) 

Article_img (URL) 

Article_img_desc (description/subtitle of the picture, displayed under it, short 1 sentence text) 

Article_img_alt (short alternative text for image) 

Article_teaser (1-2 sentences)

Article_text (text) 

(!) Article_category (make it to a MongoDB secondary index, to help the efficiency of loading a category page) 

Article_date (date of publishing) 

Article_status (published/unpublished) 

### Author / Crew

(PK) Author ID (unique ID)

First Name (text)

Last Name (text)

Email Address (text)

Profile Picture (URL)

Role (text)

Bio (text ~250 word limit)