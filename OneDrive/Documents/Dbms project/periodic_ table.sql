CREATE DATABASE periodic_table;
USE periodic_table;
show tables;
drop table product_custom_properties;drop table products;
describe element_categories;

CREATE TABLE element_categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(50) UNIQUE NOT NULL,
    category_description TEXT
);


INSERT INTO element_categories (category_name, category_description) VALUES
('Alkali Metal', 'Very reactive metals that readily lose their outermost electron.'),
('Alkaline Earth Metal', 'Reactive metals, commonly found in the Earth''s crust.'),
('Transition Metal', 'Durable, good conductors of heat and electricity, with variable oxidation states.'),
('Post-transition Metal', 'Softer metals with lower melting points compared to transition metals.'),
('Metalloid', 'Elements with properties intermediate between metals and nonmetals.'),
('Nonmetal', 'Poor conductors of heat and electricity, typically form acidic oxides.'),
('Halogen', 'Highly reactive nonmetals, often used as disinfectants.'),
('Noble Gas', 'Extremely unreactive gases, have a full outer electron shell.'),
('Lanthanide', 'A series of metallic elements found in the f-block, often called rare earth elements.'),
('Actinide', 'A series of radioactive metallic elements found in the f-block.'),
('Unknown', 'Synthetic or uncharacterized elements, properties are largely theoretical or unknown.'); 

CREATE TABLE Groups_ (
    group_id INT PRIMARY KEY,
    group_name VARCHAR(50) NOT NULL,
    description TEXT
);

INSERT INTO Groups_ (group_id, group_name, description) VALUES
(1, 'Alkali Metals', 'Highly reactive metals with one valence electron. Form +1 ions.'),
(2, 'Alkaline Earth Metals', 'Reactive metals with two valence electrons. Form +2 ions.'),
(3, 'Scandium Family', 'Transition metals, often similar properties to aluminum.'),
(4, 'Titanium Family', 'Transition metals, often used in strong, lightweight alloys.'),
(5, 'Vanadium Family', 'Transition metals with various oxidation states.'),
(6, 'Chromium Family', 'Transition metals, often with high melting points.'),
(7, 'Manganese Family', 'Transition metals with diverse chemical properties.'),
(8, 'Iron Family', 'Common transition metals, ferromagnetic.'),
(9, 'Cobalt Family', 'Transition metals, often used in magnets and catalysts.'),
(10, 'Nickel Family', 'Transition metals, often corrosion resistant.'),
(11, 'Copper Family', 'Coinage metals, good conductors of electricity.'),
(12, 'Zinc Family', 'Post-transition metals, relatively low melting points.'),
(13, 'Boron Family', 'Poor metals and metalloids.'),
(14, 'Carbon Family', 'Nonmetals, metalloids, and metals. Form covalent bonds.'),
(15, 'Nitrogen Family', 'Nonmetals and metalloids. Often form 3 covalent bonds.'),
(16, 'Oxygen Family', 'Chalcogens. Nonmetals and metalloids. Reactive nonmetals.'),
(17, 'Halogens', 'Highly reactive nonmetals with seven valence electrons. Form -1 ions.'),
(18, 'Noble Gases', 'Nonreactive nonmetals with full valence shells.');

CREATE TABLE Periods (
    period_id INT PRIMARY KEY,
    period_name VARCHAR(20) NOT NULL,
    description TEXT
);

INSERT INTO Periods (period_id, period_name, description) VALUES
(1, 'Period 1', 'Contains hydrogen and helium. Only 2 elements.'),
(2, 'Period 2', 'Contains elements from lithium to neon. 8 elements.'),
(3, 'Period 3', 'Contains elements from sodium to argon. 8 elements.'),
(4, 'Period 4', 'Contains elements from potassium to krypton. 18 elements including transition metals.'),
(5, 'Period 5', 'Contains elements from rubidium to xenon. 18 elements including transition metals.'),
(6, 'Period 6', 'Contains elements from cesium to radon, including the lanthanides. 32 elements.'),
(7, 'Period 7', 'Contains elements from francium to oganesson, including the actinides. 32 elements (some are synthetic).');

CREATE TABLE elements (
    element_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) UNIQUE NOT NULL,
    symbol VARCHAR(3) UNIQUE NOT NULL,
    atomic_number INT UNIQUE NOT NULL,
    atomic_mass DECIMAL(10, 5) NOT NULL,
    period INT NOT NULL,
   group_id INT, 
    block VARCHAR(1),
    electron_configuration VARCHAR(255),
    state_at_stp VARCHAR(20),
    melting_point_k DECIMAL(8, 2),
    boiling_point_k DECIMAL(8, 2),
    density_g_cm3 DECIMAL(8, 4),
    electronegativity DECIMAL(4, 2),
    ionization_energy_kj_mol DECIMAL(8, 2),
    electron_affinity_kj_mol DECIMAL(8, 2),
    description TEXT,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES element_categories(category_id),
    FOREIGN KEY (group_id) REFERENCES Groups_(group_id),
    FOREIGN KEY (period) REFERENCES Periods(period_id)
);

INSERT INTO elements (name, symbol, atomic_number, atomic_mass, period, group_id, block, electron_configuration, state_at_stp, melting_point_k, boiling_point_k, density_g_cm3, electronegativity, ionization_energy_kj_mol, electron_affinity_kj_mol, category_id) VALUES
('Hydrogen', 'H', 1, 1.008, 1, 1, 's', '1s1', 'Gas', 14.01, 20.28, 0.00008988, 2.20, 1312.0, 72.8, (SELECT category_id FROM element_categories WHERE category_name = 'Nonmetal')),
('Helium', 'He', 2, 4.0026, 1, 18, 's', '1s2', 'Gas', 0.95, 4.22, 0.0001786, NULL, 2372.3, -48.0, (SELECT category_id FROM element_categories WHERE category_name = 'Noble Gas')),
('Lithium', 'Li', 3, 6.94, 2, 1, 's', '[He] 2s1', 'Solid', 453.65, 1615.0, 0.534, 0.98, 520.2, 59.6, (SELECT category_id FROM element_categories WHERE category_name = 'Alkali Metal')),
('Beryllium', 'Be', 4, 9.01218, 2, 2, 's', '[He] 2s2', 'Solid', 1560.0, 2742.0, 1.85, 1.57, 899.5, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Alkaline Earth Metal')),
('Boron', 'B', 5, 10.81, 2, 13, 'p', '[He] 2s2 2p1', 'Solid', 2348.0, 4200.0, 2.34, 2.04, 800.6, 27.7, (SELECT category_id FROM element_categories WHERE category_name = 'Metalloid')),
('Carbon', 'C', 6, 12.011, 2, 14, 'p', '[He] 2s2 2p2', 'Solid', 3823.0, 4300.0, 2.267, 2.55, 1086.5, 121.8, (SELECT category_id FROM element_categories WHERE category_name = 'Nonmetal')),
('Nitrogen', 'N', 7, 14.007, 2, 15, 'p', '[He] 2s2 2p3', 'Gas', 63.15, 77.36, 0.0012506, 3.04, 1402.3, -7.0, (SELECT category_id FROM element_categories WHERE category_name = 'Nonmetal')),
('Oxygen', 'O', 8, 15.999, 2, 16, 'p', '[He] 2s2 2p4', 'Gas', 54.36, 90.20, 0.001429, 3.44, 1313.9, 141.0, (SELECT category_id FROM element_categories WHERE category_name = 'Nonmetal')),
('Fluorine', 'F', 9, 18.9984, 2, 17, 'p', '[He] 2s2 2p5', 'Gas', 53.53, 85.03, 0.001696, 3.98, 1681.0, 328.0, (SELECT category_id FROM element_categories WHERE category_name = 'Halogen')),
('Neon', 'Ne', 10, 20.1797, 2, 18, 'p', '[He] 2s2 2p6', 'Gas', 24.56, 27.07, 0.0009, NULL, 2080.7, -116.0, (SELECT category_id FROM element_categories WHERE category_name = 'Noble Gas')),
('Sodium', 'Na', 11, 22.98977, 3, 1, 's', '[Ne] 3s1', 'Solid', 370.95, 1156.0, 0.968, 0.93, 495.8, 52.9, (SELECT category_id FROM element_categories WHERE category_name = 'Alkali Metal')),
('Magnesium', 'Mg', 12, 24.305, 3, 2, 's', '[Ne] 3s2', 'Solid', 923.0, 1363.0, 1.738, 1.31, 737.7, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Alkaline Earth Metal')),
('Aluminum', 'Al', 13, 26.98154, 3, 13, 'p', '[Ne] 3s2 3p1', 'Solid', 933.47, 2792.0, 2.70, 1.61, 577.5, 42.6, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Silicon', 'Si', 14, 28.085, 3, 14, 'p', '[Ne] 3s2 3p2', 'Solid', 1687.0, 3538.0, 2.329, 1.90, 786.5, 134.0, (SELECT category_id FROM element_categories WHERE category_name = 'Metalloid')),
('Phosphorus', 'P', 15, 30.97376, 3, 15, 'p', '[Ne] 3s2 3p3', 'Solid', 317.3, 553.7, 1.82, 2.19, 1011.8, 72.0, (SELECT category_id FROM element_categories WHERE category_name = 'Nonmetal')),
('Sulfur', 'S', 16, 32.06, 3, 16, 'p', '[Ne] 3s2 3p4', 'Solid', 388.36, 717.8, 2.067, 2.58, 999.6, 200.0, (SELECT category_id FROM element_categories WHERE category_name = 'Nonmetal')),
('Chlorine', 'Cl', 17, 35.453, 3, 17, 'p', '[Ne] 3s2 3p5', 'Gas', 172.17, 239.11, 0.003214, 3.16, 1251.2, 349.0, (SELECT category_id FROM element_categories WHERE category_name = 'Halogen')),
('Argon', 'Ar', 18, 39.948, 3, 18, 'p', '[Ne] 3s2 3p6', 'Gas', 83.80, 87.30, 0.001784, NULL, 1520.6, -96.0, (SELECT category_id FROM element_categories WHERE category_name = 'Noble Gas')),
('Potassium', 'K', 19, 39.0983, 4, 1, 's', '[Ar] 4s1', 'Solid', 336.53, 1032.0, 0.862, 0.82, 418.8, 48.4, (SELECT category_id FROM element_categories WHERE category_name = 'Alkali Metal')),
('Calcium', 'Ca', 20, 40.078, 4, 2, 's', '[Ar] 4s2', 'Solid', 1115.0, 1757.0, 1.55, 1.00, 589.8, 2.4, (SELECT category_id FROM element_categories WHERE category_name = 'Alkaline Earth Metal')),
('Scandium', 'Sc', 21, 44.95591, 4, 3, 'd', '[Ar] 3d1 4s2', 'Solid', 1814.0, 3103.0, 2.989, 1.36, 633.1, 18.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Titanium', 'Ti', 22, 47.867, 4, 4, 'd', '[Ar] 3d2 4s2', 'Solid', 1941.0, 3560.0, 4.506, 1.54, 658.8, 7.6, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Vanadium', 'V', 23, 50.9415, 4, 5, 'd', '[Ar] 3d3 4s2', 'Solid', 2183.0, 3680.0, 6.11, 1.63, 650.9, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Chromium', 'Cr', 24, 51.9961, 4, 6, 'd', '[Ar] 3d5 4s1', 'Solid', 2180.0, 2944.0, 7.19, 1.66, 652.9, 64.3, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Manganese', 'Mn', 25, 54.93804, 4, 7, 'd', '[Ar] 3d5 4s2', 'Solid', 1519.0, 2334.0, 7.21, 1.55, 717.3, -50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Iron', 'Fe', 26, 55.845, 4, 8, 'd', '[Ar] 3d6 4s2', 'Solid', 1811.0, 3134.0, 7.874, 1.83, 762.5, 15.7, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Cobalt', 'Co', 27, 58.93319, 4, 9, 'd', '[Ar] 3d7 4s2', 'Solid', 1768.0, 3200.0, 8.90, 1.88, 760.4, 63.7, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Nickel', 'Ni', 28, 58.6934, 4, 10, 'd', '[Ar] 3d8 4s2', 'Solid', 1728.0, 3003.0, 8.908, 1.91, 737.1, 111.6, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Copper', 'Cu', 29, 63.546, 4, 11, 'd', '[Ar] 3d10 4s1', 'Solid', 1357.77, 2835.0, 8.96, 1.90, 745.5, 118.4, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Zinc', 'Zn', 30, 65.38, 4, 12, 'd', '[Ar] 3d10 4s2', 'Solid', 692.68, 1180.0, 7.134, 1.65, 906.4, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Gallium', 'Ga', 31, 69.723, 4, 13, 'p', '[Ar] 3d10 4s2 4p1', 'Solid', 302.91, 2477.0, 5.904, 1.81, 578.8, 41.0, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Germanium', 'Ge', 32, 72.63, 4, 14, 'p', '[Ar] 3d10 4s2 4p2', 'Solid', 1211.4, 3106.0, 5.323, 2.01, 762.2, 118.9, (SELECT category_id FROM element_categories WHERE category_name = 'Metalloid')),
('Arsenic', 'As', 33, 74.9216, 4, 15, 'p', '[Ar] 3d10 4s2 4p3', 'Solid', 1090.0, 887.0, 5.727, 2.18, 947.0, 78.2, (SELECT category_id FROM element_categories WHERE category_name = 'Metalloid')),
('Selenium', 'Se', 34, 78.971, 4, 16, 'p', '[Ar] 3d10 4s2 4p4', 'Solid', 494.0, 958.0, 4.819, 2.55, 941.0, 195.0, (SELECT category_id FROM element_categories WHERE category_name = 'Nonmetal')),
('Bromine', 'Br', 35, 79.904, 4, 17, 'p', '[Ar] 3d10 4s2 4p5', 'Liquid', 265.9, 332.0, 3.1028, 2.96, 1139.9, 325.0, (SELECT category_id FROM element_categories WHERE category_name = 'Halogen')),
('Krypton', 'Kr', 36, 83.798, 4, 18, 'p', '[Ar] 3d10 4s2 4p6', 'Gas', 115.79, 119.93, 0.003749, NULL, 1350.8, -99.0, (SELECT category_id FROM element_categories WHERE category_name = 'Noble Gas')),
('Rubidium', 'Rb', 37, 85.4678, 5, 1, 's', '[Kr] 5s1', 'Solid', 312.46, 961.0, 1.532, 0.82, 403.0, 46.9, (SELECT category_id FROM element_categories WHERE category_name = 'Alkali Metal')),
('Strontium', 'Sr', 38, 87.62, 5, 2, 's', '[Kr] 5s2', 'Solid', 1050.0, 1655.0, 2.64, 0.95, 549.5, 5.0, (SELECT category_id FROM element_categories WHERE category_name = 'Alkaline Earth Metal')),
('Yttrium', 'Y', 39, 88.90585, 5, 3, 'd', '[Kr] 4d1 5s2', 'Solid', 1799.0, 3618.0, 4.472, 1.22, 600.0, 29.6, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Zirconium', 'Zr', 40, 91.224, 5, 4, 'd', '[Kr] 4d2 5s2', 'Solid', 2128.0, 4650.0, 6.511, 1.33, 640.1, 41.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Niobium', 'Nb', 41, 92.90637, 5, 5, 'd', '[Kr] 4d4 5s1', 'Solid', 2750.0, 5017.0, 8.57, 1.60, 652.1, 86.1, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Molybdenum', 'Mo', 42, 95.96, 5, 6, 'd', '[Kr] 4d5 5s1', 'Solid', 2896.0, 4912.0, 10.28, 2.16, 684.3, 72.1, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Technetium', 'Tc', 43, 98.0, 5, 7, 'd', '[Kr] 4d5 5s2', 'Solid', 2430.0, 4538.0, 11.5, 1.90, 702.0, 53.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Ruthenium', 'Ru', 44, 101.07, 5, 8, 'd', '[Kr] 4d7 5s1', 'Solid', 2607.0, 4423.0, 12.45, 2.20, 710.2, 100.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Rhodium', 'Rh', 45, 102.9055, 5, 9, 'd', '[Kr] 4d8 5s1', 'Solid', 2237.0, 3968.0, 12.41, 2.28, 719.7, 110.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Palladium', 'Pd', 46, 106.42, 5, 10, 'd', '[Kr] 4d10', 'Solid', 1828.05, 3236.0, 12.023, 2.20, 804.4, 54.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Silver', 'Ag', 47, 107.8682, 5, 11, 'd', '[Kr] 4d10 5s1', 'Solid', 1234.93, 2435.0, 10.49, 1.93, 731.0, 126.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Cadmium', 'Cd', 48, 112.414, 5, 12, 'd', '[Kr] 4d10 5s2', 'Solid', 594.22, 1040.0, 8.65, 1.69, 867.7, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Indium', 'In', 49, 114.818, 5, 13, 'p', '[Kr] 4d10 5s2 5p1', 'Solid', 429.75, 2345.0, 7.31, 1.78, 558.3, 28.8, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Tin', 'Sn', 50, 118.710, 5, 14, 'p', '[Kr] 4d10 5s2 5p2', 'Solid', 505.08, 2875.0, 7.26, 1.96, 708.6, 107.3, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Antimony', 'Sb', 51, 121.760, 5, 15, 'p', '[Kr] 4d10 5s2 5p3', 'Solid', 903.78, 1860.0, 6.697, 2.05, 834.0, 101.0, (SELECT category_id FROM element_categories WHERE category_name = 'Metalloid')),
('Tellurium', 'Te', 52, 127.60, 5, 16, 'p', '[Kr] 4d10 5s2 5p4', 'Solid', 722.66, 1261.0, 6.24, 2.10, 869.3, 190.2, (SELECT category_id FROM element_categories WHERE category_name = 'Metalloid')),
('Iodine', 'I', 53, 126.90447, 5, 17, 'p', '[Kr] 4d10 5s2 5p5', 'Solid', 386.85, 457.4, 4.93, 2.66, 1008.4, 295.0, (SELECT category_id FROM element_categories WHERE category_name = 'Halogen')),
('Xenon', 'Xe', 54, 131.293, 5, 18, 'p', '[Kr] 4d10 5s2 5p6', 'Gas', 161.4, 165.03, 0.005894, 2.60, 1170.4, -77.0, (SELECT category_id FROM element_categories WHERE category_name = 'Noble Gas')),
('Cesium', 'Cs', 55, 132.90545, 6, 1, 's', '[Xe] 6s1', 'Solid', 301.59, 944.0, 1.879, 0.79, 375.7, 45.5, (SELECT category_id FROM element_categories WHERE category_name = 'Alkali Metal')),
('Barium', 'Ba', 56, 137.327, 6, 2, 's', '[Xe] 6s2', 'Solid', 1000.0, 2170.0, 3.51, 0.89, 502.9, 13.9, (SELECT category_id FROM element_categories WHERE category_name = 'Alkaline Earth Metal')),
('Lanthanum', 'La', 57, 138.9055, 6, 3, 'd', '[Xe] 5d1 6s2', 'Solid', 1193.0, 3737.0, 6.162, 1.10, 538.1, 48.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Cerium', 'Ce', 58, 140.116, 6, 3, 'f', '[Xe] 4f1 5d1 6s2', 'Solid', 1068.0, 3716.0, 6.77, 1.12, 534.4, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Praseodymium', 'Pr', 59, 140.90765, 6, 3, 'f', '[Xe] 4f3 6s2', 'Solid', 1204.0, 3793.0, 6.77, 1.13, 527.0, 48.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Neodymium', 'Nd', 60, 144.242, 6, 3, 'f', '[Xe] 4f4 6s2', 'Solid', 1297.0, 3347.0, 7.01, 1.14, 533.1, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Promethium', 'Pm', 61, 145.0, 6, 3, 'f', '[Xe] 4f5 6s2', 'Solid', 1315.0, 3273.0, 7.26, 1.13, 540.0, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Samarium', 'Sm', 62, 150.36, 6, 3, 'f', '[Xe] 4f6 6s2', 'Solid', 1345.0, 2076.0, 7.52, 1.17, 543.0, 48.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Europium', 'Eu', 63, 151.964, 6, 3, 'f', '[Xe] 4f7 6s2', 'Solid', 1099.0, 1800.0, 5.244, 1.20, 547.1, 48.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Gadolinium', 'Gd', 64, 157.25, 6, 3, 'f', '[Xe] 4f7 5d1 6s2', 'Solid', 1585.0, 3573.0, 7.90, 1.20, 593.4, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Terbium', 'Tb', 65, 158.92535, 6, 3, 'f', '[Xe] 4f9 6s2', 'Solid', 1629.0, 3396.0, 8.23, 1.20, 565.8, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Dysprosium', 'Dy', 66, 162.500, 6, 3, 'f', '[Xe] 4f10 6s2', 'Solid', 1680.0, 2840.0, 8.55, 1.22, 573.0, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Holmium', 'Ho', 67, 164.93032, 6, 3, 'f', '[Xe] 4f11 6s2', 'Solid', 1734.0, 2873.0, 8.79, 1.23, 581.0, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Erbium', 'Er', 68, 167.259, 6, 3, 'f', '[Xe] 4f12 6s2', 'Solid', 1802.0, 3141.0, 9.066, 1.24, 589.3, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Thulium', 'Tm', 69, 168.93421, 6, 3, 'f', '[Xe] 4f13 6s2', 'Solid', 1818.0, 2223.0, 9.32, 1.25, 596.7, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Ytterbium', 'Yb', 70, 173.045, 6, 3, 'f', '[Xe] 4f14 6s2', 'Solid', 1097.0, 1469.0, 6.965, 1.10, 603.4, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Lutetium', 'Lu', 71, 174.9668, 6, 3, 'd', '[Xe] 4f14 5d1 6s2', 'Solid', 1925.0, 3675.0, 9.84, 1.27, 523.5, 50.0, (SELECT category_id FROM element_categories WHERE category_name = 'Lanthanide')),
('Hafnium', 'Hf', 72, 178.49, 6, 4, 'd', '[Xe] 4f14 5d2 6s2', 'Solid', 2506.0, 4876.0, 13.31, 1.30, 658.5, 17.2, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Tantalum', 'Ta', 73, 180.94788, 6, 5, 'd', '[Xe] 4f14 5d3 6s2', 'Solid', 3290.0, 5731.0, 16.69, 1.50, 761.0, 31.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Tungsten', 'W', 74, 183.84, 6, 6, 'd', '[Xe] 4f14 5d4 6s2', 'Solid', 3695.0, 6203.0, 19.25, 2.36, 786.0, 78.9, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Rhenium', 'Re', 75, 186.207, 6, 7, 'd', '[Xe] 4f14 5d5 6s2', 'Solid', 3459.0, 5869.0, 21.02, 1.90, 760.0, 15.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Osmium', 'Os', 76, 190.23, 6, 8, 'd', '[Xe] 4f14 5d6 6s2', 'Solid', 3306.0, 5285.0, 22.59, 2.20, 840.0, 106.1, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Iridium', 'Ir', 77, 192.217, 6, 9, 'd', '[Xe] 4f14 5d7 6s2', 'Solid', 2719.0, 4701.0, 22.56, 2.20, 876.0, 151.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Platinum', 'Pt', 78, 195.084, 6, 10, 'd', '[Xe] 4f14 5d9 6s1', 'Solid', 2041.4, 4098.0, 21.45, 2.20, 870.0, 205.0, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Gold', 'Au', 79, 196.96657, 6, 11, 'd', '[Xe] 4f14 5d10 6s1', 'Solid', 1337.33, 3129.0, 19.3, 2.54, 890.1, 222.8, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Mercury', 'Hg', 80, 200.592, 6, 12, 'd', '[Xe] 4f14 5d10 6s2', 'Liquid', 234.32, 629.88, 13.534, 2.00, 1007.1, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Thallium', 'Tl', 81, 204.38, 6, 13, 'p', '[Xe] 4f14 5d10 6s2 6p1', 'Solid', 577.0, 1746.0, 11.85, 1.62, 589.4, 19.2, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Lead', 'Pb', 82, 207.2, 6, 14, 'p', '[Xe] 4f14 5d10 6s2 6p2', 'Solid', 600.61, 2022.0, 11.34, 1.87, 715.6, 35.1, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Bismuth', 'Bi', 83, 208.9804, 6, 15, 'p', '[Xe] 4f14 5d10 6s2 6p3', 'Solid', 544.7, 1837.0, 9.78, 2.02, 702.9, 91.2, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Polonium', 'Po', 84, 209.0, 6, 16, 'p', '[Xe] 4f14 5d10 6s2 6p4', 'Solid', 527.0, 1235.0, 9.196, 2.00, 812.1, 183.3, (SELECT category_id FROM element_categories WHERE category_name = 'Metalloid')),
('Astatine', 'At', 85, 210.0, 6, 17, 'p', '[Xe] 4f14 5d10 6s2 6p5', 'Solid', 575.0, 610.0, 6.35, 2.20, 920.0, 270.0, (SELECT category_id FROM element_categories WHERE category_name = 'Halogen')),
('Radon', 'Rn', 86, 222.0, 6, 18, 'p', '[Xe] 4f14 5d10 6s2 6p6', 'Gas', 202.0, 211.5, 0.00973, NULL, 1037.0, -68.0, (SELECT category_id FROM element_categories WHERE category_name = 'Noble Gas')),
('Francium', 'Fr', 87, 223.0, 7, 1, 's', '[Rn] 7s1', 'Solid', 300.0, 950.0, 1.87, 0.70, 392.8, 47.2, (SELECT category_id FROM element_categories WHERE category_name = 'Alkali Metal')),
('Radium', 'Ra', 88, 226.0, 7, 2, 's', '[Rn] 7s2', 'Solid', 973.0, 2010.0, 5.5, 0.90, 509.3, 9.3, (SELECT category_id FROM element_categories WHERE category_name = 'Alkaline Earth Metal')),
('Actinium', 'Ac', 89, 227.0, 7, 3, 'd', '[Rn] 6d1 7s2', 'Solid', 1323.0, 3471.0, 10.07, 1.10, 499.0, 33.7, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Thorium', 'Th', 90, 232.0377, 7, 3, 'f', '[Rn] 6d2 7s2', 'Solid', 2023.0, 5061.0, 11.724, 1.30, 587.0, 112.7, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Protactinium', 'Pa', 91, 231.03588, 7, 3, 'f', '[Rn] 5f2 6d1 7s2', 'Solid', 1845.0, 4300.0, 15.37, 1.50, 568.0, 53.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Uranium', 'U', 92, 238.02891, 7, 3, 'f', '[Rn] 5f3 6d1 7s2', 'Solid', 1405.0, 4404.0, 19.05, 1.38, 597.6, 50.9, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Neptunium', 'Np', 93, 237.0, 7, 3, 'f', '[Rn] 5f4 6d1 7s2', 'Solid', 917.0, 4175.0, 20.45, 1.36, 604.5, 47.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Plutonium', 'Pu', 94, 244.0, 7, 3, 'f', '[Rn] 5f6 7s2', 'Solid', 912.5, 3501.0, 19.816, 1.28, 584.7, 31.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Americium', 'Am', 95, 243.0, 7, 3, 'f', '[Rn] 5f7 7s2', 'Solid', 1267.0, 2880.0, 12.0, 1.30, 578.2, 10.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Curium', 'Cm', 96, 247.0, 7, 3, 'f', '[Rn] 5f7 6d1 7s2', 'Solid', 1613.0, 3383.0, 13.5, 1.30, 581.0, 29.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Berkelium', 'Bk', 97, 247.0, 7, 3, 'f', '[Rn] 5f9 7s2', 'Solid', 1323.0, 2900.0, 14.78, 1.30, 601.0, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Californium', 'Cf', 98, 251.0, 7, 3, 'f', '[Rn] 5f10 7s2', 'Solid', 1173.0, 1743.0, 15.1, 1.30, 610.0, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Einsteinium', 'Es', 99, 252.0, 7, 3, 'f', '[Rn] 5f11 7s2', 'Solid', 1133.0, 1269.0, 8.84, 1.30, 619.0, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Fermium', 'Fm', 100, 257.0, 7, 3, 'f', '[Rn] 5f12 7s2', 'Solid', 1800.0, NULL, NULL, 1.30, 627.0, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Mendelevium', 'Md', 101, 258.0, 7, 3, 'f', '[Rn] 5f13 7s2', 'Solid', 1100.0, NULL, NULL, 1.30, 635.0, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Nobelium', 'No', 102, 259.0, 7, 3, 'f', '[Rn] 5f14 7s2', 'Solid', 1100.0, NULL, NULL, 1.30, 642.0, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Lawrencium', 'Lr', 103, 262.0, 7, 3, 'd', '[Rn] 5f14 7s2 7p1', 'Solid', 1900.0, NULL, NULL, 1.30, 470.0, 0.0, (SELECT category_id FROM element_categories WHERE category_name = 'Actinide')),
('Rutherfordium', 'Rf', 104, 267.0, 7, 4, 'd', '[Rn] 5f14 6d2 7s2', 'Solid', 2400.0, 5800.0, 23.2, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Dubnium', 'Db', 105, 268.0, 7, 5, 'd', '[Rn] 5f14 6d3 7s2', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Seaborgium', 'Sg', 106, 271.0, 7, 6, 'd', '[Rn] 5f14 6d4 7s2', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Bohrium', 'Bh', 107, 272.0, 7, 7, 'd', '[Rn] 5f14 6d5 7s2', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Hassium', 'Hs', 108, 277.0, 7, 8, 'd', '[Rn] 5f14 6d6 7s2', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Meitnerium', 'Mt', 109, 276.0, 7, 9, 'd', '[Rn] 5f14 6d7 7s2', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Darmstadtium', 'Ds', 110, 281.0, 7, 10, 'd', '[Rn] 5f14 6d9 7s1', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Roentgenium', 'Rg', 111, 280.0, 7, 11, 'd', '[Rn] 5f14 6d10 7s1', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Transition Metal')),
('Copernicium', 'Cn', 112, 285.0, 7, 12, 'd', '[Rn] 5f14 6d10 7s2', 'Gas', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Nihonium', 'Nh', 113, 286.0, 7, 13, 'p', '[Rn] 5f14 6d10 7s2 7p1', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Flerovium', 'Fl', 114, 289.0, 7, 14, 'p', '[Rn] 5f14 6d10 7s2 7p2', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Moscovium', 'Mc', 115, 290.0, 7, 15, 'p', '[Rn] 5f14 6d10 7s2 7p3', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Livermorium', 'Lv', 116, 293.0, 7, 16, 'p', '[Rn] 5f14 6d10 7s2 7p4', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Post-transition Metal')),
('Tennessine', 'Ts', 117, 294.0, 7, 17, 'p', '[Rn] 5f14 6d10 7s2 7p5', 'Solid', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Halogen')),
('Oganesson', 'Og', 118, 294.0, 7, 18, 'p', '[Rn] 5f14 6d10 7s2 7p6', 'Gas', NULL, NULL, NULL, NULL, NULL, NULL, (SELECT category_id FROM element_categories WHERE category_name = 'Noble Gas'));

-- Create the Isotopes Table
CREATE TABLE Isotopes (
    isotope_id INT PRIMARY KEY AUTO_INCREMENT, 
    element_id INT NOT NULL,
    mass_number INT NOT NULL,
    symbol VARCHAR(10) NOT NULL, 
    natural_abundance DECIMAL(6,4), 
    half_life_days DECIMAL(15,8), 
    decay_mode VARCHAR(50), 
    is_radioactive BOOLEAN NOT NULL DEFAULT FALSE,
    FOREIGN KEY (element_id) REFERENCES Elements(element_id),
    UNIQUE (element_id, mass_number) 
);

-- Insert data into Isotopes Table (examples for common elements)
INSERT INTO Isotopes (element_id, mass_number, symbol, natural_abundance, half_life_days, decay_mode, is_radioactive) VALUES
-- Hydrogen Isotopes (element_id = 1)
(1, 1, '1H', 0.9998, NULL, NULL, FALSE), -- Protium
(1, 2, '2H', 0.0001, NULL, NULL, FALSE), -- Deuterium
(1, 3, '3H', 0.0000, 4508.5, 'Beta-minus', TRUE), 

-- Helium Isotopes (element_id = 2)
(2, 3, '3He', 0.0000, NULL, NULL, FALSE), -- Helium-3
(2, 4, '4He', 0.9999, NULL, NULL, FALSE), -- Helium-4

-- Carbon Isotopes (element_id = 6)
(6, 12, '12C', 0.9893, NULL, NULL, FALSE), -- Carbon-12
(6, 13, '13C', 0.0107, NULL, NULL, FALSE), -- Carbon-13
(6, 14, '14C', 0.0000, 2081900.0, 'Beta-minus', TRUE), -- Carbon-14 (5730 years = 2081900 days approx)

-- Oxygen Isotopes (element_id = 8)
(8, 16, '16O', 0.9976, NULL, NULL, FALSE),
(8, 17, '17O', 0.0004, NULL, NULL, FALSE),
(8, 18, '18O', 0.0020, NULL, NULL, FALSE),

-- Uranium Isotopes (element_id = 92) - Examples of radioactive isotopes
(92, 238, '238U', 0.9927, 1642500000000.0, 'Alpha', TRUE), -- Uranium-238 (4.468 billion years)
(92, 235, '235U', 0.0072, 257700000000.0, 'Alpha', TRUE), -- Uranium-235 (703.8 million years)
(92, 234, '234U', 0.0000, 89800000.0, 'Alpha', TRUE); -- Uranium-234 (245500 years)SELECT * FROM element_categories;


CREATE TABLE Uses (
    use_id INT PRIMARY KEY AUTO_INCREMENT,
    element_id INT NOT NULL,
    application VARCHAR(255) NOT NULL,
    details TEXT,
    FOREIGN KEY (element_id) REFERENCES Elements(element_id),
    UNIQUE (element_id, application) 
);


INSERT INTO Uses (element_id, application, details) VALUES
-- Hydrogen (element_id = 1)
(1, 'Fuel', 'Used as rocket fuel and in fuel cells.'),
(1, 'Industrial Chemicals', 'Used in the production of ammonia (Haber-Bosch process) and methanol.'),

-- Helium (element_id = 2)
(2, 'Cryogenics', 'Used to cool superconducting magnets in MRI scanners and other research.'),
(2, 'Balloon/Airship Inflation', 'Non-flammable lifting gas.'),
(2, 'Diving Gas', 'Mixed with oxygen for deep-sea diving (Heliox).'),

-- Lithium (element_id = 3)
(3, 'Batteries', 'Essential component in rechargeable lithium-ion batteries.'),
(3, 'Psychiatric Medication', 'Used to treat bipolar disorder.'),

-- Carbon (element_id = 6)
(6, 'Organic Chemistry', 'The fundamental element of all known life, forming countless compounds.'),
(6, 'Fuel', 'Main component of fossil fuels (coal, oil, natural gas).'),
(6, 'Structural Materials', 'Used in steel (as graphite), diamonds, and carbon fibers.'),

-- Oxygen (element_id = 8)
(8, 'Respiration', 'Essential for aerobic respiration in most living organisms.'),
(8, 'Combustion', 'Supports burning and many industrial processes.'),
(8, 'Medical Use', 'Used in oxygen therapy for patients with respiratory issues.'),

-- Iron (element_id = 26)
(26, 'Construction', 'Main component of steel, used in buildings, bridges, and vehicles.'),
(26, 'Manufacturing', 'Used in machinery, tools, and appliances.'),

-- Copper (element_id = 29)
(29, 'Electrical Wiring', 'Excellent electrical conductivity.'),
(29, 'Plumbing', 'Corrosion-resistant pipes and fittings.'),

-- Gold (element_id = 79)
(79, 'Jewelry', 'Valued for its beauty and resistance to corrosion.'),
(79, 'Electronics', 'Used in connectors due to high conductivity and corrosion resistance.'),
(79, 'Investment', 'Considered a safe-haven asset.'),

-- Uranium (element_id = 92)
(92, 'Nuclear Fuel', 'Uranium-235 is used in nuclear power plants and weapons.'),
(92, 'Dating', 'Uranium-lead dating is used to determine the age of rocks.');




-- elements table from data
SELECT * FROM elements ; select * from element_categories; select * from periods; select * from isotopes; select * from uses;

-- Noble 
SELECT e.name, e.symbol, ec.category_name
FROM elements e
JOIN element_categories ec ON e.category_id = ec.category_id
WHERE ec.category_name = 'Noble Gas';

-- Atomic Number
SELECT name, symbol, atomic_number, state_at_stp
FROM elements
WHERE atomic_number <= 50 AND state_at_stp = 'Solid'
ORDER BY atomic_number;
-- basic reteieval
select * from elements where atomic_number=6;
-- in gp1 elemenys
select name,symbol from elements where group_id=1;

-- ordering&limiting
select name,symbol, atomic_number from elements order by atomic_number asc;

-- join opreation
select elements.name,elements.symbol,element_categories.category_name
from elements 
join element_categories  on elements.group_id= element_categories.category_id;
