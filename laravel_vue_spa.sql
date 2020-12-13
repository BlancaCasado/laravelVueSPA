-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-12-2020 a las 21:53:02
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `laravel_vue_spa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `authors`
--

CREATE TABLE `authors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `authors`
--

INSERT INTO `authors` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(2, 'OSAMU TEZUKA', 'authors_images/PR8Nd7mPkUp16P7UBOqOW8DaopVANV8qJEfO9G0X.jpg', '2020-12-13 16:58:15', '2020-12-13 16:58:15'),
(3, 'EIICHIRO ODA', 'authors_images/34cFZU88aWU3WMbwkpHFOPWam10Uyhe7wFv2i1TK.jpg', '2020-12-13 17:23:09', '2020-12-13 17:23:09'),
(4, 'MASASHI KISHIMOTO', 'authors_images/bJ0A2aIztgHoVx3iMVFk0wbf8VBJL0gxEAD7Gkqi.jpg', '2020-12-13 17:31:10', '2020-12-13 17:31:16'),
(5, 'TITE KUBO', 'authors_images/4YmWLHtyeZylfOR6Fd907Jua9cMWeP06rPKGyxQz.jpg', '2020-12-13 17:31:43', '2020-12-13 17:31:43'),
(6, 'OSAMU TEZUKA 2', 'authors_images/iq0IaMHAerjUq1RAh2U9SXWA4nXDZ8Ln1nXHa5Vi.jpg', '2020-12-13 17:32:07', '2020-12-13 17:32:07'),
(7, 'TITE KUBO 2', 'authors_images/iUBOFrb9VBpJlj5iW4kNibVT0tEgLPznriea2UiF.jpg', '2020-12-13 17:32:25', '2020-12-13 17:32:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(5, 'Orígen del manga', 'categories_images/NF1cjpyOcDZ2yL8tbrrWkvAcMzAqqy9oWTRG0r1x.jpg', '2020-12-13 18:30:44', '2020-12-13 18:30:58'),
(6, 'El manga en el siglo XX', 'categories_images/OwU9qhPsT9IlSAxH0pdPeXTa8oAxCzZ2frGEW3RF.jpg', '2020-12-13 18:31:40', '2020-12-13 18:31:40'),
(7, 'Los años 60 y los robots gigantes', 'categories_images/AZfZenvpXlP6SjAbFTYcVl4AcRFdfvvtlCxZanEM.jpg', '2020-12-13 18:32:31', '2020-12-13 18:32:51'),
(8, 'Origen de anime', 'categories_images/3d6KtMNDX3z9Nf5zgBJFpOnHTCTswqkMuNSIskU3.jpg', '2020-12-13 18:33:44', '2020-12-13 18:33:44');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `histories`
--

CREATE TABLE `histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `histories`
--

INSERT INTO `histories` (`id`, `name`, `image`, `created_at`, `updated_at`) VALUES
(2, 'Shonen', 'histories_images/nLAayFlya3a0zs2LPDa6APn9jsdPAMsCM2H3F9CN.jpg', '2020-12-13 18:34:46', '2020-12-13 18:34:46'),
(3, 'Seinen', 'histories_images/lVhERjo5fYYQmqDY7tn2NwL5bGlTjHJCkCCMAiMC.jpg', '2020-12-13 18:35:05', '2020-12-13 18:35:05'),
(4, 'Josei', 'histories_images/m2Ch6LUJ7GSz0FAomPCOuGKgQdWL2E9UToMgRq1o.jpg', '2020-12-13 18:35:19', '2020-12-13 18:35:19'),
(5, 'Shojo', 'histories_images/toSrH7KgBFtoxJF4ZOBMCjqDYAa7d1ESV9KLRlJq.jpg', '2020-12-13 18:35:43', '2020-12-13 18:35:43'),
(6, 'Shonen 2', 'histories_images/riYopvE4o5JEX1ywLmWcyuMYFoezILzoG5Pv5ATY.jpg', '2020-12-13 18:36:06', '2020-12-13 18:36:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(155, '2014_10_12_000000_create_users_table', 1),
(156, '2014_10_12_100000_create_password_resets_table', 1),
(157, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(158, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(159, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(160, '2016_06_01_000004_create_oauth_clients_table', 1),
(161, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(162, '2019_08_19_000000_create_failed_jobs_table', 1),
(163, '2020_11_24_235842_create_categories_table', 1),
(164, '2020_12_11_175627_create_authors_table', 1),
(165, '2020_12_11_175908_create_histories_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0a5b0afa59e35304f369b5a4c524cacc3bba5033e40276888fe4484cb61f3c17603772f2f81b6ab9', 1, 1, 'Personal Access Token', '[\"administrator\"]', 1, '2020-12-13 16:33:57', '2020-12-13 16:33:57', '2021-12-13 17:33:57'),
('51309342c0f476c8b82bd57d2ce1ac562868a0ce4fb11ec389f83ae7039389262778dbbf27e66863', 2, 1, 'Personal Access Token', '[\"user\"]', 1, '2020-12-13 15:52:20', '2020-12-13 15:52:20', '2021-12-13 16:52:20'),
('5edb3e75d886bf52adaa9fe401f3cda573bf62d3e69026af87884d3a2fb0b9cba590bf0bd6539228', 2, 1, 'Personal Access Token', '[\"user\"]', 1, '2020-12-13 17:05:40', '2020-12-13 17:05:40', '2021-12-13 18:05:40'),
('7165d3850b77abd394ca4b93547d3fff6321f9a4bee3eb2797b9c3c9e1d43b6bd8c5f49c95d9bb89', 1, 1, 'Personal Access Token', '[\"administrator\"]', 1, '2020-12-13 16:50:30', '2020-12-13 16:50:30', '2021-12-13 17:50:30'),
('81b5bd23c99bd2e4a6672291a241f78920beac9a8671618cf02c1c2147bee286e9d63d07148db6af', 3, 1, 'Personal Access Token', '[\"user\"]', 1, '2020-12-13 15:57:55', '2020-12-13 15:57:55', '2021-12-13 16:57:55'),
('c79a867732a3820128493f3640d6bfe92aca01ecb5947b1f21da7f43d134f4d4efa356024d873687', 1, 1, 'Personal Access Token', '[\"administrator\"]', 1, '2020-12-13 16:01:38', '2020-12-13 16:01:38', '2021-12-13 17:01:38'),
('d9846d71cdd9adcc840dc74788084b0d6c2bf032651833a8c5d1b6b192509eed7a5d28e898602f1e', 1, 1, 'Personal Access Token', '[\"administrator\"]', 1, '2020-12-13 16:55:46', '2020-12-13 16:55:46', '2021-12-13 17:55:46'),
('fac43560854cc2c5e68508e819e220cfa280ca8eef77babeeb8cc0f52f72e9e92bcee6e64eda8ed5', 1, 1, 'Personal Access Token', '[\"administrator\"]', 0, '2020-12-13 17:18:04', '2020-12-13 17:18:04', '2021-12-13 18:18:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', '5tDemv0CEohpvn6DHXqvzY2A3Ehwy2MHbtVwHAMX', 'http://localhost', 1, 0, 0, '2020-12-13 15:52:06', '2020-12-13 15:52:06'),
(2, NULL, 'Laravel Password Grant Client', 'cQSJTgRNJgnYZZd9voNe55JDd6VNnRG2MdZMmROe', 'http://localhost', 0, 1, 0, '2020-12-13 15:52:06', '2020-12-13 15:52:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2020-12-13 15:52:06', '2020-12-13 15:52:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Blanca', 'bcasadoalvarez@gmail.com', NULL, '$2y$10$pR.OQcZKPuqQwBn.QXdoj.11jKChWvKBep2BZ6n5isWbzad/2daTa', 'administrator', NULL, '2020-12-13 15:25:50', '2020-12-13 15:25:50'),
(2, 'prueba', 'prueba@gmail.com', NULL, '$2y$10$nG1TfWRrQDdh607nzD1hPe1.NI0NR5aIIp3.Q.jsKmVhJX4zCrGMy', 'user', NULL, '2020-12-13 15:51:39', '2020-12-13 15:51:39'),
(3, 'prueba2', 'prueba2@gmail.com', NULL, '$2y$10$cpKWKGxyXknUKa/F6qhCZ.LKyxbCFH74EAW3R1cZ9zWBXCFtCQP26', 'user', NULL, '2020-12-13 15:57:43', '2020-12-13 15:57:43');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `authors`
--
ALTER TABLE `authors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `histories`
--
ALTER TABLE `histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=166;

--
-- AUTO_INCREMENT de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
