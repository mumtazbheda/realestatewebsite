import { type SchemaTypeDefinition } from "sanity";
import { Area } from "./schemas/Area";
import { Property } from "./schemas/Property";
import { Agents } from "./schemas/Agents";
import { Projects } from "./schemas/Projects";
import { Mass_Media } from "./schemas/Mass_Media";
import { Developers } from "./schemas/Developers";
import { PropertiesSliderSection } from "./schemas/Sections/PropertiesSliderSection";
import { ContactExpertsSection } from "./schemas/Sections/ContactExpertsSection";
import { Media } from "./schemas/Media";
import { ProjectSection } from "./schemas/Sections/ProjectSection";
import { AgentSection } from "./schemas/Sections/AgentSection";
import { ReadyToSellSection } from "./schemas/Sections/ReadyToSellSection";
import { DeveloperSection } from "./schemas/Sections/DeveloperSection";
import { ContentSliderSection } from "./schemas/Sections/ContentwithSlider";
import { MoreAreaSection } from "./schemas/Sections/MoreAreaSection";
import { PropertiesListSection } from "./schemas/Sections/PropertiesListSection";
import { ContentSection } from "./schemas/Sections/ContentSection";
import { ContactSection } from "./schemas/Sections/ContactSectiont";
import { City } from "./schemas/City";
import { PropertyInformationSection } from "./schemas/Sections/PropertyInformationSection";
import {
  FloorPlan,
  FloorPlanSection,
} from "./schemas/Sections/FloorPlanSection";
import {
  PaymentPlanSection,
  PaymentPlans,
} from "./schemas/Sections/PaymentPlanSection";
import { FAQSection, FAQs } from "./schemas/Sections/FAQSection";
import { AreasSection } from "./schemas/Sections/AreasSection";
import { BlogSection } from "./schemas/Sections/BlogSection";
import { Reviews } from "./schemas/Reviews";
import {
  ReflectionFloorPlan,
  ReflectionFloorPlanSection,
} from "./schemas/Sections/ReflectionFloorPlanSection";
import { Slider } from "./schemas/Slider";
import { Publisher } from "./schemas/Publishers";
import { Settings } from "./schemas/Settings";
import { Blog } from "./schemas/Blog";
import { ReviewObject, ReviewSection } from "./schemas/Sections/ReviewSection";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // HomePage Slider
    Slider,
    // Schemas
    City,
    Area,
    Projects,
    Property,
    Agents,
    Developers,
    Media,
    Mass_Media,
    Publisher,
    Reviews,
    Blog,
    Settings,
    // Sections
    PropertiesSliderSection,
    ContactExpertsSection,
    ProjectSection,
    AgentSection,
    BlogSection,
    AreasSection,
    ReadyToSellSection,
    DeveloperSection,
    ContentSliderSection,
    MoreAreaSection,
    PropertiesListSection,
    ContentSection,
    ContactSection,
    PropertyInformationSection,
    FloorPlanSection,
    FloorPlan,
    ReflectionFloorPlanSection,
    ReflectionFloorPlan,
    PaymentPlanSection,
    PaymentPlans,
    FAQSection,
    FAQs,
    ReviewObject, // For Review Section
    ReviewSection
  ],
};
