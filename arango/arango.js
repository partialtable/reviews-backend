const userDocumentSchema = {
  rule: {
    properties: {
      user_id: {
        type: "object",
        properties: {
          key: { type: "integer" },
          first_name: { type: "string" },
          last_name: { type: "string" },
          avatar: { type: "string" },
          location: { type: "string" }
        }
      }
    }
  }
}

const RestuarantsDocumentSchema = {
  rule: {
    properties: {
      restaurant_id: { type: "integer" },
      restaurant_name: { type: "string" },
      number_of_reviews: { type: "integer" },
      food_overall_rating: { type: "integer" },
      service_overall_rating: { type: "integer" },
      ambience_overall_rating: { type: "integer" },
      overall_rating: { type: "integer" },
      noise_level: { type: "string" },
      percent_five_star: { type: "integer" },
      percent_four_star: { type: "integer" },
      percent_three_star: { type: "integer" },
      percent_two_star: { type: "integer" },
      percent_one_star: { type: "integer" },
      would_recommend:{ type: "boolean" },
      loved_for: { type: "array" items: { type: "boolean" } },
      filters: { type: "array" items: { type: "boolean" } },
      reviews: {
        type: "array",
        items: {
          type: "object",
          properties: {
            review_id: { type: "integer" },
            user_id: { type: "integer" },
            create_date: { type: "date-time" },
            description: { type: "string" },
            rating_overall: { type: "integer" },
            rating_food: { type: "integer" },
            rating_service: { type: "integer" },
            rating_ambience: { type: "integer" },
            noise_level: { type: "string" },
            would_recommend: { type: "boolean" }
          }
        }
      }
    }
  }
}