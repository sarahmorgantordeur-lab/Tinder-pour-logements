UPDATE "Property"
SET property_type = CASE property_type::text
  WHEN 'Farm'              THEN 'Other'
  WHEN 'CountryHouse'      THEN 'Villa'
  WHEN 'ApartmentBuilding' THEN 'Appartement'
  WHEN 'MixedUseBuilding'  THEN 'Other'
  WHEN 'ManorHouse'        THEN 'Castel'
  WHEN 'Pavilion'          THEN 'Other'
  WHEN 'GroundFloor'       THEN 'Appartement'
  WHEN 'Triplex'           THEN 'Duplex'
  WHEN 'ServiceApartment'  THEN 'Appartement'
  ELSE property_type::text
END::text::"PropertyType";

UPDATE "TenantProfile"
SET property_types = ARRAY(
  SELECT CASE unnest::text
    WHEN 'Farm'              THEN 'Other'
    WHEN 'CountryHouse'      THEN 'Villa'
    WHEN 'ApartmentBuilding' THEN 'Appartement'
    WHEN 'MixedUseBuilding'  THEN 'Other'
    WHEN 'ManorHouse'        THEN 'Castel'
    WHEN 'Pavilion'          THEN 'Other'
    WHEN 'GroundFloor'       THEN 'Appartement'
    WHEN 'Triplex'           THEN 'Duplex'
    WHEN 'ServiceApartment'  THEN 'Appartement'
    ELSE unnest::text
  END::"PropertyType"
  FROM unnest(property_types)
);
