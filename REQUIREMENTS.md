#Requirements

##Personas

###Justin K. Carter

**Age:** 44

**Company:** EarthHard, Inc

**Occupation:** Limnologist

**Goal:** Book flight tickets for domestic and international flights to study inland water at different locations. 

**Challenge:** Has a very busy schedule between teaching and research so finding the time to sit down and go through lists of flights is difficult. 

**How We Help:** Allow Justin to select the most suitable flights through talking to Alexa while he showers, waters his plants, or stares at his water samples. 

###Isaac J. Young

**Age:** 18

**Company:** Northview University

**Occupation:** College Student

**Goal:** Book flights to go home during Spring break

**Challenge:** With the limited amount of money he made from tutoring Python, Isaac cannot afford the peak-time tickets but has to come back to school in time for classes. 

**ow We Help:** Allow Isaac to keep track of the lowest price of flights in a range of time he specifies and update him during his casual conversation with Alexa. 

###Mary G. Loya

**Age:** 76

**Company:** Planet Pizza

**Occupation:** Training Specialist

**Goal:** Book the earliest flights to Montana from Florida to see her granddaughter who is about to give birth to her great granddaughter. 

**Challenge:** Unfamiliar with web browser based flight searching technologies, but the matter is too urgent to wait until some comes to help. 

**How We Help:** Allow Mary to find the earliest flight to Montana by chatting with Alexa the way she would with a human. 

##Use Cases

###Initial Query

**Actor:** User

**Scenario:** User asks Alexa for information on flights and provides constraints for the search. Alexa informs the user of any invalid inputs if there is any and ask for corrections, or confirms the request with user. Alexa fetches data and displays to user. User receives flight details in desired form. 

###Followup Query

**Actor:** User

**Scenario:** User receives flight information from previous query and adds new constraints or alters previous search conditions. Alexa fetches previous query, modify conditions, and search for flights. Alexa display results to user in desired format. 

###Bookmark Flight

**Actor:** User

**Scenario:** User requests to bookmark a particular flight for booking or comparison with other flights and gives the flight a label. Alexa stores the reference to the flight in a buffer. Alexa confirms with the user that the flight is bookmarked under the label user specified. 

###Comparison

**Actor:** User

Scenario: User provides references to two flights and criterias for comparison. Alexa fetch data on these flights, generates comparison results, and display them to the user. 

###Save Frequent Routes

**Actor:** User

Scenario: User provides origin, destination, and label of a route. Alexa validates the input and confirms with user. Alexa stores the route. 

##Domain Modeling

