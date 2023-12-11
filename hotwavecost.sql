/*
 Navicat Premium Data Transfer

 Source Server         : SQSX23
 Source Server Type    : PostgreSQL
 Source Server Version : 100004
 Source Host           : localhost:5432
 Source Catalog        : SQSX23
 Source Schema         : SQSX23

 Target Server Type    : PostgreSQL
 Target Server Version : 100004
 File Encoding         : 65001

 Date: 11/12/2023 17:04:07
*/


-- ----------------------------
-- Table structure for hotwavecost
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwavecost";
CREATE TABLE "SQSX23"."hotwavecost" (
  "cost" numeric(10,2),
  "ny" varchar(10) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of hotwavecost
-- ----------------------------
INSERT INTO "SQSX23"."hotwavecost" VALUES (12932.00, '2022-01');
INSERT INTO "SQSX23"."hotwavecost" VALUES (14364.00, '2022-02');
INSERT INTO "SQSX23"."hotwavecost" VALUES (10925.00, '2022-03');
INSERT INTO "SQSX23"."hotwavecost" VALUES (13295.00, '2022-04');
INSERT INTO "SQSX23"."hotwavecost" VALUES (10889.00, '2022-05');
INSERT INTO "SQSX23"."hotwavecost" VALUES (10819.00, '2022-06');
INSERT INTO "SQSX23"."hotwavecost" VALUES (12494.00, '2022-07');
INSERT INTO "SQSX23"."hotwavecost" VALUES (13736.00, '2022-08');
INSERT INTO "SQSX23"."hotwavecost" VALUES (11611.00, '2022-09');
INSERT INTO "SQSX23"."hotwavecost" VALUES (14540.00, '2022-10');
INSERT INTO "SQSX23"."hotwavecost" VALUES (14407.00, '2022-11');
INSERT INTO "SQSX23"."hotwavecost" VALUES (12413.00, '2022-12');
INSERT INTO "SQSX23"."hotwavecost" VALUES (11801.00, '2023-01');
INSERT INTO "SQSX23"."hotwavecost" VALUES (13409.00, '2023-02');
INSERT INTO "SQSX23"."hotwavecost" VALUES (14142.00, '2023-03');
INSERT INTO "SQSX23"."hotwavecost" VALUES (13675.00, '2023-04');
INSERT INTO "SQSX23"."hotwavecost" VALUES (10572.00, '2023-05');
INSERT INTO "SQSX23"."hotwavecost" VALUES (10640.00, '2023-06');
INSERT INTO "SQSX23"."hotwavecost" VALUES (14134.00, '2023-07');
INSERT INTO "SQSX23"."hotwavecost" VALUES (10801.00, '2023-08');
INSERT INTO "SQSX23"."hotwavecost" VALUES (14678.00, '2023-09');
INSERT INTO "SQSX23"."hotwavecost" VALUES (13674.00, '2023-10');
INSERT INTO "SQSX23"."hotwavecost" VALUES (10142.00, '2023-11');
INSERT INTO "SQSX23"."hotwavecost" VALUES (11219.00, '2023-12');

-- ----------------------------
-- Table structure for hotwavegoods
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwavegoods";
CREATE TABLE "SQSX23"."hotwavegoods" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "category" varchar(30) COLLATE "pg_catalog"."default",
  "goodscode" varchar(36) COLLATE "pg_catalog"."default",
  "goodsname" varchar(36) COLLATE "pg_catalog"."default",
  "number" int4,
  "price" numeric(10,2),
  "remark" varchar(100) COLLATE "pg_catalog"."default",
  "specification" varchar(36) COLLATE "pg_catalog"."default",
  "version" timestamp(6)
)
;

-- ----------------------------
-- Records of hotwavegoods
-- ----------------------------
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', '', 'GDS2023060002', 'kun腿', 100, 10.00, '', '1*1', '2023-06-26 10:52:55.766');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', '', 'GDS2023060003', 'kun胸肉', 50, 5.00, '', '2*2', '2023-06-26 10:53:53.901');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('0f5fb058-27c0-426a-9ff1-501aee9845f7', '', 'GDS2023070004', '鸡爪', 100, 3.00, '', '50g', '2023-07-06 14:38:08.614');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('817d50ae-9ab1-46c4-b680-be6a6259bdb2', '', 'GDS2023070005', '鸡头', 50, 2.00, '', '100g', '2023-07-06 14:38:23.532');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', '', 'GDS2023070006', '烤鸡', 100, 30.00, '', '500g', '2023-07-06 14:38:43.663');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('74df2637-ee42-4dc0-8fd3-bcfe6cf654fc', '', 'GDS2023070007', '卤鸡', 100, 40.00, '', '600g', '2023-07-06 14:39:08.164');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('3e150f22-735f-4881-9d85-d5e3e52efb38', '', 'GDS2023070008', '炸鸡腿', 50, 10.00, '', '200g', '2023-07-06 14:39:37.846');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('2e91a563-7185-4bbf-b7c7-e0f6f521ae19', '', 'GDS2023070009', '炸kun柳', 200, 5.00, '', '50g', '2023-07-06 14:39:59.601');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('f4e548e7-75db-413d-910c-a54e673a4e81', '', 'GDS2023070010', '鸡架', 100, 12.00, '', '300g', '2023-07-06 14:41:14.802');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('686b338a-c967-4a17-9b7e-10ea5433a490', '', 'GDS2023070011', '卤鸡蛋', 500, 2.00, '', '50g', '2023-07-06 14:41:42.456');
INSERT INTO "SQSX23"."hotwavegoods" VALUES ('7bf82543-d12e-476c-9e8d-040daf450850', '', 'GDS2023060001', 'kun排', 0, 8.00, '', '300g', '2023-07-06 15:40:18.463');

-- ----------------------------
-- Table structure for hotwavegoodsstock
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwavegoodsstock";
CREATE TABLE "SQSX23"."hotwavegoodsstock" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "dailysalesnum" numeric(10,2),
  "goodsid" varchar(36) COLLATE "pg_catalog"."default",
  "inpurchasenum" numeric(10,2),
  "insalesnum" numeric(10,2),
  "merchantid" varchar(36) COLLATE "pg_catalog"."default",
  "recentpurchaseprice" numeric(10,2),
  "safetystockdays" int4,
  "safetystocknum" numeric(10,2),
  "stockamount" numeric(10,2),
  "stocknum" numeric(10,2),
  "suggestpurchasenum" numeric(10,2),
  "version" timestamp(6)
)
;

-- ----------------------------
-- Records of hotwavegoodsstock
-- ----------------------------
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('b8a7355a-9df4-45e8-9019-7bc297472f8a', 0.00, '3e150f22-735f-4881-9d85-d5e3e52efb38', 0.00, 0.00, 'ca998e8d-7222-4e24-9849-4f16f78897b2', 0.00, 0, 0.00, 0.00, 1000.00, 0.00, '2023-07-15 15:57:42.338');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('54739abb-1c4a-4c2f-b458-9b853f36a2d3', 10.00, '7bf82543-d12e-476c-9e8d-040daf450850', 0.00, 0.00, '4c94a6e7-7d5e-4141-bd5f-43816aaca39f', 0.00, 10, 100.00, 0.00, 780.00, 0.00, '2023-07-06 16:27:14.34');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('3920924f-0dd0-440a-a209-adba05289398', 100.00, '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', 0.00, 0.00, '607604d4-005c-41d1-9fc1-a8280622cbdb', 0.00, 10, 1000.00, 0.00, 500.00, 500.00, '2023-07-08 21:03:05.366');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('3aefdf8c-c722-4c39-b828-f5bd5a97268a', 10.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', 0.00, 0.00, '59b0436c-8ebf-4e5e-8bab-b6a74e056b10', 0.00, 10, 100.00, 0.00, 500.00, 0.00, '2023-07-08 21:03:05.367');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('c22bf4e7-cda1-40e5-9c76-bbd557918222', 0.00, '3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', 0.00, 0.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 0.00, 0, 0.00, 0.00, 100.00, 0.00, '2023-07-15 16:41:58.508');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('0540490d-d583-469e-8682-bc46d5835ffe', 0.00, '686b338a-c967-4a17-9b7e-10ea5433a490', 0.00, 0.00, NULL, 0.00, 0, 0.00, 0.00, 0.00, 0.00, '2023-07-15 16:41:58.508');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('37ad20c8-d12e-40cc-b488-653151e23f34', 0.00, '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', 0.00, 0.00, '607604d4-005c-41d1-9fc1-a8280622cbdb', 0.00, 0, 0.00, 0.00, 5.00, 0.00, '2023-07-14 18:51:20.824');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('b07272b2-d91e-4be2-9b23-f828d697047b', 0.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', 0.00, 0.00, 'e1920567-2c3d-42fb-b466-01f57bbaedf5', 0.00, 0, 0.00, 0.00, 4.00, 0.00, '2023-07-14 18:51:20.824');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('c7f48298-05eb-4722-94f5-85ede39d48cc', 0.00, '3e150f22-735f-4881-9d85-d5e3e52efb38', 0.00, 0.00, NULL, 0.00, 0, 0.00, 0.00, 0.00, 0.00, '2023-07-15 16:41:58.508');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('67e22584-f8fd-45f6-aee1-581aada9c342', 0.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', 0.00, 0.00, '607604d4-005c-41d1-9fc1-a8280622cbdb', 0.00, 0, 0.00, 0.00, 100.00, 0.00, '2023-07-14 18:53:16.531');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('98f4a466-3278-453b-81a9-820807f5a833', 0.00, '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', 0.00, 0.00, '4a865fe0-1674-4476-953b-98eb563c6766', 0.00, 0, 0.00, 0.00, 0.00, 0.00, '2023-07-14 19:10:52.48');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('d4562c7c-1a39-47b0-bd86-c2bade841146', 0.00, '3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', 0.00, 0.00, '8bb4ad77-0db6-4e08-a922-592d74cf8d9d', 0.00, 0, 0.00, 0.00, 100.00, 0.00, '2023-07-14 19:11:01.214');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('7653c44a-7db9-4649-9efa-9db7f0bc29e9', 100.00, '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', 0.00, 0.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 0.00, 3, 300.00, 0.00, 100.00, 200.00, '2023-07-15 11:02:01.646');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('a56092df-8cae-418a-916c-b7415529a9bc', 38.00, '0f5fb058-27c0-426a-9ff1-501aee9845f7', 0.00, 0.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 0.00, 5, 190.00, 0.00, 150.00, 40.00, '2023-07-15 11:02:31.95');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('3b4bff60-0624-4444-9b9b-430cb7c95b6c', 62.00, '3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', 0.00, 0.00, '4a865fe0-1674-4476-953b-98eb563c6766', 0.00, 8, 496.00, 0.00, 500.00, 0.00, '2023-07-15 11:05:02.737');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('3bd1e5ec-e0ba-49b6-ab23-acf35ac03365', 52.00, '74df2637-ee42-4dc0-8fd3-bcfe6cf654fc', 0.00, 0.00, 'c85bc5af-4a2d-4926-b396-ab4509c39981', 0.00, 10, 520.00, 0.00, 500.00, 20.00, '2023-07-15 11:05:02.737');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('447fdba8-da20-468d-9245-5086a7e52cdd', 15.00, '7bf82543-d12e-476c-9e8d-040daf450850', 0.00, 0.00, '3044ea27-df00-4b62-ac38-547f913f3585', 0.00, 10, 150.00, 0.00, 100.00, 50.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('55f1391a-6eea-4fa4-950b-9e6826cc0ea1', 8.00, 'f4e548e7-75db-413d-910c-a54e673a4e81', 0.00, 0.00, '536ce188-f67b-4ca3-8287-b0c0df907afd', 0.00, 10, 80.00, 0.00, 100.00, 0.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('78a360db-3287-4b0c-a8a7-61d8c3d921b9', 100.00, '3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', 0.00, 0.00, 'ca998e8d-7222-4e24-9849-4f16f78897b2', 0.00, 3, 300.00, 0.00, 280.00, 20.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('91b205c3-e4f2-4525-83a9-491d02f8f60a', 30.00, '817d50ae-9ab1-46c4-b680-be6a6259bdb2', 0.00, 0.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 0.00, 10, 300.00, 0.00, 280.00, 20.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('92b0d280-ec10-465e-8eec-0f7051d64db0', 50.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', 0.00, 0.00, '8bb4ad77-0db6-4e08-a922-592d74cf8d9d', 0.00, 10, 500.00, 0.00, 500.00, 0.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('9672a2fc-0e67-49c5-b0e9-56c63154768f', 100.00, '3e150f22-735f-4881-9d85-d5e3e52efb38', 0.00, 0.00, 'ca998e8d-7222-4e24-9849-4f16f78897b2', 0.00, 10, 1000.00, 0.00, 150.00, 850.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('9d3cbc80-dad3-4e6d-9130-6c0e96275e0d', 20.00, '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', 0.00, 0.00, '607604d4-005c-41d1-9fc1-a8280622cbdb', 0.00, 10, 200.00, 0.00, 200.00, 0.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('aac5aae3-cbea-4493-b070-d025d16729e5', 50.00, '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', 0.00, 0.00, 'd61e7ab4-ae2e-47b3-99ba-2109cb2591e5', 0.00, 4, 200.00, 0.00, 200.00, 0.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('c44af033-8def-40ec-9f85-9d5fc10a496e', 10.00, '686b338a-c967-4a17-9b7e-10ea5433a490', 0.00, 0.00, '3044ea27-df00-4b62-ac38-547f913f3585', 0.00, 6, 60.00, 0.00, 500.00, 0.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('d916037f-4471-4f87-820b-1d4b98d742ec', 20.00, '3e150f22-735f-4881-9d85-d5e3e52efb38', 0.00, 0.00, '59b0436c-8ebf-4e5e-8bab-b6a74e056b10', 0.00, 8, 160.00, 0.00, 280.00, 0.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('dafaac9c-a186-43ef-a067-4699e910e2a7', 10.00, '74df2637-ee42-4dc0-8fd3-bcfe6cf654fc', 0.00, 0.00, '536ce188-f67b-4ca3-8287-b0c0df907afd', 0.00, 8, 80.00, 0.00, 280.00, 0.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('e56ce00e-31a0-4a3b-843d-a28139f01de7', 50.00, 'f4e548e7-75db-413d-910c-a54e673a4e81', 0.00, 0.00, 'e1920567-2c3d-42fb-b466-01f57bbaedf5', 0.00, 10, 500.00, 0.00, 500.00, 0.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('eec28354-d90b-4412-bbcb-323cfe22b0d7', 30.00, '686b338a-c967-4a17-9b7e-10ea5433a490', 0.00, 0.00, 'e1920567-2c3d-42fb-b466-01f57bbaedf5', 0.00, 9, 270.00, 0.00, 200.00, 70.00, '2023-07-06 15:47:59.524');
INSERT INTO "SQSX23"."hotwavegoodsstock" VALUES ('f60de8d5-f089-4e79-954c-202d716388ce', 100.00, '817d50ae-9ab1-46c4-b680-be6a6259bdb2', 0.00, 0.00, '4c94a6e7-7d5e-4141-bd5f-43816aaca39f', 0.00, 7, 700.00, 0.00, 100.00, 600.00, '2023-07-06 15:47:59.524');

-- ----------------------------
-- Table structure for hotwavemerchant
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwavemerchant";
CREATE TABLE "SQSX23"."hotwavemerchant" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "address" varchar(100) COLLATE "pg_catalog"."default",
  "adminstrator" varchar(36) COLLATE "pg_catalog"."default",
  "businesslicense" varchar(36) COLLATE "pg_catalog"."default",
  "companytype" varchar(20) COLLATE "pg_catalog"."default",
  "email" varchar(36) COLLATE "pg_catalog"."default",
  "fullname" varchar(50) COLLATE "pg_catalog"."default",
  "merchantcode" varchar(36) COLLATE "pg_catalog"."default",
  "merchantname" varchar(36) COLLATE "pg_catalog"."default",
  "merchanttype" varchar(20) COLLATE "pg_catalog"."default",
  "parentmerchantid" varchar(36) COLLATE "pg_catalog"."default",
  "realname" varchar(36) COLLATE "pg_catalog"."default",
  "remark" varchar(100) COLLATE "pg_catalog"."default",
  "telephone" varchar(20) COLLATE "pg_catalog"."default",
  "treeinfo_isdetail" char(1) COLLATE "pg_catalog"."default",
  "treeinfo_layer" int4,
  "treeinfo_path" varchar(36) COLLATE "pg_catalog"."default",
  "version" timestamp(6)
)
;

-- ----------------------------
-- Records of hotwavemerchant
-- ----------------------------
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('607604d4-005c-41d1-9fc1-a8280622cbdb', '中心校区', 'admin', NULL, 'gt', NULL, NULL, '2023070003MTS', '山大中心校区代理', 'rz', '4a865fe0-1674-4476-953b-98eb563c6766', '山大中心校区代理', NULL, NULL, '1', 3, '000600010001', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('4a865fe0-1674-4476-953b-98eb563c6766', '山大南路', 'admin', NULL, 'qy', NULL, NULL, '2023070002MTS', '济南KUN排总代理', 'rz', '3680ab63-a826-4445-b818-39be8ee88a37', '济南总代理', NULL, NULL, '0', 2, '00060001', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('3680ab63-a826-4445-b818-39be8ee88a37', '泉城路', 'admin', NULL, 'qy', NULL, NULL, '2023070001MTS', '山东KUN排总代理', 'rz', NULL, '山东总代理', NULL, NULL, '0', 1, '0006', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('536ce188-f67b-4ca3-8287-b0c0df907afd', NULL, 'admin', NULL, 'qy', NULL, NULL, 'HG001', '黄冈总代', 'rz', 'f05efc28-414d-4c61-9129-4f9743bad836', NULL, NULL, NULL, '1', 2, '00030002', '2023-07-01 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('c85bc5af-4a2d-4926-b396-ab4509c39981', NULL, 'admin', NULL, 'qy', NULL, NULL, 'WH001', '武汉总代', 'rz', 'f05efc28-414d-4c61-9129-4f9743bad836', NULL, NULL, NULL, '1', 2, '00030001', '2023-06-30 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('f05efc28-414d-4c61-9129-4f9743bad836', NULL, 'admin', NULL, 'qy', NULL, NULL, 'HB001', '湖北总代', 'rz', NULL, NULL, NULL, NULL, '0', 1, '0003', '2023-06-30 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('16547059-c4b3-4076-8da1-fa6f118ddcc4', NULL, 'admin', NULL, 'qy', NULL, NULL, 'hn002', '河南总代', 'rz', NULL, NULL, NULL, NULL, '0', 1, '0002', '2023-06-26 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('4c94a6e7-7d5e-4141-bd5f-43816aaca39f', '鼓楼区', 'admin', NULL, 'qy', NULL, NULL, '2023070009MTS', '南京KUN排总代理', 'rz', 'f086536f-feaf-4019-abc5-29d2ea476f39', '南京总代理', NULL, NULL, '1', 2, '00040001', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('f086536f-feaf-4019-abc5-29d2ea476f39', NULL, 'admin', NULL, 'qy', NULL, NULL, 'JS001', '江苏总代', 'rz', NULL, NULL, NULL, NULL, '0', 1, '0004', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('e1920567-2c3d-42fb-b466-01f57bbaedf5', NULL, 'admin', NULL, 'qy', NULL, NULL, '00201', '郑州总代', 'rz', '16547059-c4b3-4076-8da1-fa6f118ddcc4', NULL, NULL, NULL, '1', 2, '00020001', '2023-06-26 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('59b0436c-8ebf-4e5e-8bab-b6a74e056b10', '城阳区', 'admin', NULL, 'gt', NULL, NULL, '2023070008MTS', '城阳区总代理', 'rz', '8bb4ad77-0db6-4e08-a922-592d74cf8d9d', '城阳区代理', NULL, NULL, '1', 3, '000600020001', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('8bb4ad77-0db6-4e08-a922-592d74cf8d9d', '市南区', 'admin', NULL, 'qy', NULL, NULL, '2023070007MTS', '青岛KUN总代理', 'rz', '3680ab63-a826-4445-b818-39be8ee88a37', '青岛总代理', NULL, NULL, '0', 2, '00060002', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('d61e7ab4-ae2e-47b3-99ba-2109cb2591e5', '兴隆山校区', 'admin', NULL, 'gt', NULL, NULL, '2023070006MTS', '山大兴隆山校区代理', 'rz', '4a865fe0-1674-4476-953b-98eb563c6766', '山大兴隆山代理', NULL, NULL, '1', 3, '000600010004', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('b868e029-a47e-4c8f-bc44-90db311baae6', '软件园校区', 'admin', NULL, 'qy', NULL, NULL, '2023070005MTS', '山大软件园校区代理', 'rz', '4a865fe0-1674-4476-953b-98eb563c6766', '山大软件园代理', NULL, NULL, '1', 3, '000600010003', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('ca998e8d-7222-4e24-9849-4f16f78897b2', '洪家楼校区', 'admin', NULL, 'gt', NULL, NULL, '2023070004MTS', '山大洪家楼校区代理', 'rz', '4a865fe0-1674-4476-953b-98eb563c6766', '山大洪家楼代理', NULL, NULL, '1', 3, '000600010002', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('3044ea27-df00-4b62-ac38-547f913f3585', '福田区', 'admin', NULL, 'qy', NULL, NULL, '2023070010MTS', '深圳KUN排总代理', 'rz', 'f127dfa6-e2e5-4d82-a4f4-67af081a2e65', '深圳总代理', NULL, NULL, '1', 2, '00050001', '2023-07-06 00:00:00');
INSERT INTO "SQSX23"."hotwavemerchant" VALUES ('f127dfa6-e2e5-4d82-a4f4-67af081a2e65', NULL, 'admin', NULL, 'qy', NULL, NULL, 'GD001', '广东总代', 'rz', NULL, NULL, NULL, NULL, '0', 1, '0005', '2023-07-06 00:00:00');

-- ----------------------------
-- Table structure for hotwaveorderdetail
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwaveorderdetail";
CREATE TABLE "SQSX23"."hotwaveorderdetail" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "actualamount" numeric(10,2),
  "amount" numeric(10,2),
  "discount" numeric(10,2),
  "discounttype" varchar(20) COLLATE "pg_catalog"."default",
  "goods" varchar(36) COLLATE "pg_catalog"."default",
  "parentid" varchar(36) COLLATE "pg_catalog"."default",
  "price" numeric(10,2),
  "quality" int4,
  "remark" varchar(100) COLLATE "pg_catalog"."default",
  "specification" varchar(36) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of hotwaveorderdetail
-- ----------------------------
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('bca1faf1-5d3b-4d15-b33c-0f2f5a9d3d48', 15000.00, 15000.00, NULL, 'none', '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', 'be964061-ddfe-4c75-867f-8c083e3e0185', 30.00, 500, '', NULL);
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('0b6577dd-8a91-44f9-b094-a72f88d57cc5', 3000.00, 3000.00, 0.00, 'none', '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', 'f59f3927-b058-4dcf-8cd3-ce90292724a9', 30.00, 100, '', '500g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('0b6c64e0-eb26-4119-a622-69ba215f8421', 40000.00, 40000.00, 0.00, 'none', '74df2637-ee42-4dc0-8fd3-bcfe6cf654fc', '9b80828f-3e15-45ef-9229-e77602902263', 40.00, 1000, '', '600g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('8642fa53-755d-4ceb-ab4b-0137dd836d5e', 3000.00, 3000.00, 0.00, 'none', '0f5fb058-27c0-426a-9ff1-501aee9845f7', 'd7c6c634-1bc7-443d-83fc-32135827d791', 3.00, 1000, '', '50g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('39d16e67-21e0-4771-956c-56ba303867b5', 20000.00, 20000.00, 0.00, 'none', '74df2637-ee42-4dc0-8fd3-bcfe6cf654fc', 'd7c6c634-1bc7-443d-83fc-32135827d791', 40.00, 500, '', '600g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('97066dd5-9f8f-4c53-b817-a336eda1167c', 12000.00, 12000.00, 0.00, 'none', 'f4e548e7-75db-413d-910c-a54e673a4e81', 'd7c6c634-1bc7-443d-83fc-32135827d791', 12.00, 1000, '', '300g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('71f1243d-45e0-4452-9556-39d14f7030bf', 2000.00, 2000.00, 0.00, 'none', '3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', 'd7c6c634-1bc7-443d-83fc-32135827d791', 10.00, 200, '', '1*1');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('699d7c8c-b310-4607-b3a7-4da63f5a9edf', 2000.00, 2000.00, 0.00, 'none', '817d50ae-9ab1-46c4-b680-be6a6259bdb2', '04d4a953-2be8-4ad1-a5a7-1b0e140af5e6', 2.00, 1000, '', '100g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('d0dd9089-6be0-4272-8fda-c31f27f37022', 4000.00, 4000.00, 0.00, 'none', '7bf82543-d12e-476c-9e8d-040daf450850', '04d4a953-2be8-4ad1-a5a7-1b0e140af5e6', 8.00, 500, '', '300g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('46cb2ad2-e8ff-4af5-92fc-64f7e8f3188c', 20000.00, 20000.00, 0.00, 'none', '3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', 'a98b4f69-9a12-490b-a3d8-46dddb231d48', 10.00, 2000, '', '1*1');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('362f8c79-3ee7-4db0-a663-ee6168dfdd28', 4000.00, 4000.00, 0.00, 'none', '7bf82543-d12e-476c-9e8d-040daf450850', 'a98b4f69-9a12-490b-a3d8-46dddb231d48', 8.00, 500, '', '300g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('d231aec9-d4db-4714-9186-0cac73ff7025', 45000.00, 45000.00, 0.00, 'none', '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', 'a98b4f69-9a12-490b-a3d8-46dddb231d48', 30.00, 1500, '', '500g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('1b86137b-a8ec-4652-90f3-4797505c4ed1', 20000.00, 20000.00, 0.00, 'none', '3e150f22-735f-4881-9d85-d5e3e52efb38', '1e8be9dc-135e-45aa-840a-6786225cfcf5', 10.00, 2000, '', '200g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('68caf568-45b4-4f7e-b86e-6ce932e36bdb', 60000.00, 60000.00, 0.00, 'none', '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', '1e8be9dc-135e-45aa-840a-6786225cfcf5', 30.00, 2000, '', '500g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('99cd5366-ab9d-479b-9c4b-32b9a9182e00', 15000.00, 15000.00, 0.00, 'none', '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', '1e8be9dc-135e-45aa-840a-6786225cfcf5', 5.00, 3000, '', '50g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('50135ea2-bd7f-4d86-8294-cf82e4dee348', 150.00, 150.00, NULL, 'none', '0f5fb058-27c0-426a-9ff1-501aee9845f7', '923fc08e-f04d-43ef-acfe-8a49890601f7', 3.00, 50, '', NULL);
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('b0f50526-41c5-4854-a13c-39d709ad2dc7', 4000.00, 4000.00, NULL, 'none', '7bf82543-d12e-476c-9e8d-040daf450850', '458645a7-2317-49e0-b7b1-365d5edf532f', 8.00, 500, '', NULL);
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('c0ea6d38-1383-488e-ac65-f535d4b73fb6', 2000.00, 2000.00, 0.00, 'none', '686b338a-c967-4a17-9b7e-10ea5433a490', '84dbf26b-e070-4b6c-9f5b-e917ba2605e4', 2.00, 1000, '', '50g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('02b30681-77ac-4d44-afa7-5f5192832038', 5000.00, 5000.00, 0.00, 'none', '3e150f22-735f-4881-9d85-d5e3e52efb38', '84dbf26b-e070-4b6c-9f5b-e917ba2605e4', 10.00, 500, '', '200g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('762fcad9-069f-4ba8-9531-53c163ce7d6e', 400000.00, 400000.00, 0.00, 'none', '74df2637-ee42-4dc0-8fd3-bcfe6cf654fc', 'b3a7b772-80b1-413b-b95c-4da3f46e3ba5', 40.00, 10000, '', '600g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('0569931d-3c6b-45da-8932-6f60d24aa37c', 3000.00, 3000.00, 0.00, 'none', '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', '53fde944-7cad-47d4-80bf-7279eae19ae1', 30.00, 100, '', '500g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('209167dd-1ad8-4fe6-83c2-e59494cf31a6', 500.00, 500.00, 0.00, 'none', '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', 'b3af39e0-9831-4e06-b733-226026de0489', 5.00, 100, '', '50g');
INSERT INTO "SQSX23"."hotwaveorderdetail" VALUES ('29b9ed44-b72b-44c3-9c6a-e203bc98118a', 50.00, 50.00, 0.00, 'none', '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', '55995d52-ab78-4d85-8095-5097cb04a6d1', 5.00, 10, '', '50g');

-- ----------------------------
-- Table structure for hotwavepurchasedetail
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwavepurchasedetail";
CREATE TABLE "SQSX23"."hotwavepurchasedetail" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "amount" numeric(10,2),
  "goods" varchar(36) COLLATE "pg_catalog"."default",
  "parentid" varchar(36) COLLATE "pg_catalog"."default",
  "price" numeric(10,2),
  "quality" int4,
  "remark" varchar(100) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of hotwavepurchasedetail
-- ----------------------------
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('1ca25e6d-4833-493b-b166-12a3d1516f9b', 50.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', 'ef8159e8-3b80-4368-8943-0719d1f88ec4', 5.00, 10, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('271f3719-d8b8-4274-bcdd-ed0debfb932f', 20.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', '963da2cb-fe24-4b16-ba02-f59e893adf3e', 5.00, 4, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('ad72ad5b-65d2-4b6d-b472-4f7e646863c4', 25.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', '963da2cb-fe24-4b16-ba02-f59e893adf3e', 5.00, 5, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('dd958a80-8bfd-462a-a114-e3f9382fa059', 7.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', 'db9bf0df-5e88-4813-b455-0e1d3db2a124', 5.00, 5, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('059478d5-5397-4805-b14d-37358027593a', 15.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', '95bba0e2-84c7-49b8-88b1-6bd86a73a7e3', 5.00, 3, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('9e5ae837-1da9-4b5b-840d-ed4e823d172e', 5.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', '95bba0e2-84c7-49b8-88b1-6bd86a73a7e3', 5.00, 1, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('7dea513b-cfd3-4aa4-b2c9-18182d11278c', 130.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', 'ec3ee97b-56db-435a-8185-a4ca0abcfbff', 5.00, 26, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('a1691198-2d64-4b16-9a68-5bd2f549494b', 15.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', 'ea682d39-850f-45cd-9854-9f120253a2fa', 5.00, 3, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('542182fe-66b5-4cc3-811e-90b3e37b6bfa', 40.00, '3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', 'ea682d39-850f-45cd-9854-9f120253a2fa', 10.00, 4, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('c08759f8-f1da-42e6-9cd6-c3278f3aa7d8', 15000.00, '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', '32cb3806-a1ec-4604-aafb-c84cd57fcb60', 30.00, 500, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('fb525257-fad6-4e54-a376-66c6bc52ea3e', 4000.00, '7bf82543-d12e-476c-9e8d-040daf450850', '0b8cac0f-6c55-49bf-9b0a-d3293a5c8db9', 8.00, 500, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('d58aa955-7c7e-4d43-824a-600d5f895bae', 150.00, '0f5fb058-27c0-426a-9ff1-501aee9845f7', '4ddb31a5-93f9-433d-afc2-c3c63c23d492', 3.00, 50, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('e1d6e3d2-a859-40d7-9ffc-878989b74b01', 15000.00, '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', '1dc74661-8f4d-425d-8cdf-3153644d74cb', 30.00, 500, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('52feb04c-cc7e-433d-bb13-dedeb85f402f', 50.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', '1dc74661-8f4d-425d-8cdf-3153644d74cb', 5.00, 10, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('bafc1c61-10b6-4de8-9a94-71a64f288d2d', 15000.00, '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', '4c71e588-0756-4bd9-9132-725bf30ff6a7', 30.00, 500, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('1f0766c3-7343-485e-ab7e-1396d8b61087', 3000.00, '3d4eaef6-8e77-4911-a1f9-db16fe8cdef7', '4c71e588-0756-4bd9-9132-725bf30ff6a7', 10.00, 300, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('fd3c867e-1dac-4fd4-9409-93fa08b79ab3', 0.00, '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', '918c8cfb-bc6b-4aa7-a7f6-1c5fbaf7c50a', 5.00, 0, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('19c3c8e4-ddf3-448d-93e5-eecca598182f', 15000.00, '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', '918c8cfb-bc6b-4aa7-a7f6-1c5fbaf7c50a', 30.00, 500, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('67420bd0-e38d-4f07-a790-2adca02561c2', 0.00, '2e91a563-7185-4bbf-b7c7-e0f6f521ae19', '95e5b4d2-5dd4-4801-a99b-91eee0fc4942', 5.00, 0, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('43eabd7d-1926-4e7a-85a4-05280ca3a5d0', 15000.00, '9e29fc1e-6005-4e5c-8b52-32a9ae2da4d7', '95e5b4d2-5dd4-4801-a99b-91eee0fc4942', 30.00, 500, '');
INSERT INTO "SQSX23"."hotwavepurchasedetail" VALUES ('a1ebd07f-c825-476f-90a1-c69291b8421c', 0.00, '2f7e0dfb-7c68-4ae1-9850-1ab060ed4b36', '95e5b4d2-5dd4-4801-a99b-91eee0fc4942', 5.00, 0, '');

-- ----------------------------
-- Table structure for hotwavepurchaseorder
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwavepurchaseorder";
CREATE TABLE "SQSX23"."hotwavepurchaseorder" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "billstatus" varchar(36) COLLATE "pg_catalog"."default",
  "expectedtime" date,
  "merchant" varchar(36) COLLATE "pg_catalog"."default",
  "ordercode" varchar(36) COLLATE "pg_catalog"."default",
  "orderperson" varchar(36) COLLATE "pg_catalog"."default",
  "ordertime" date,
  "processinstance" varchar(36) COLLATE "pg_catalog"."default",
  "remark" varchar(100) COLLATE "pg_catalog"."default",
  "totalprice" numeric(10,2),
  "version" timestamp(6)
)
;

-- ----------------------------
-- Records of hotwavepurchaseorder
-- ----------------------------
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('54ada093-e809-47c6-af2c-4aced68a1dc1', '0', '2023-06-25', NULL, '001', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-16', '', '', 100.00, '2023-06-25 17:00:54.548');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('8d8a4dd6-a9e6-479c-a56a-60415d1830fc', '0', '2023-06-25', NULL, '5243453', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-23', '', '', 0.00, '2023-06-25 17:01:17.738');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('1dc74661-8f4d-425d-8cdf-3153644d74cb', '1', '2023-07-09', 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307080021', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-07-07', 'a942c452-1bcf-4339-8210-ef28fee962c3', '', 15050.00, '2023-07-08 21:05:56.765');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('ef8159e8-3b80-4368-8943-0719d1f88ec4', '0', '2023-06-27', NULL, 'ORD202306270001', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-26', '', '', 50.00, '2023-06-27 10:00:48.357');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('4c71e588-0756-4bd9-9132-725bf30ff6a7', '1', '2023-07-15', 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307140022', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-07-13', '95f740c8-230f-47fd-b721-b5f57c89c02c', '', 18000.00, '2023-07-14 18:54:18.662');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('963da2cb-fe24-4b16-ba02-f59e893adf3e', '0', '2023-06-27', NULL, 'ORD202306270003', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-26', '', '', 45.00, '2023-06-27 11:40:38.396');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('918c8cfb-bc6b-4aa7-a7f6-1c5fbaf7c50a', '0', '2023-07-14', '4a865fe0-1674-4476-953b-98eb563c6766', 'ORD202307140023', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-07-04', '', '', 15000.00, '2023-07-14 19:11:37.237');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('8c9dcde2-c4ab-45b6-bcb6-394e98dbeab6', '0', NULL, NULL, 'ORD202306270006', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', NULL, '', '', 0.00, '2023-06-27 13:55:26.481');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('f58b208f-e331-4bf9-92aa-1039f8d49b6a', '0', NULL, NULL, 'ORD202306270007', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', NULL, '', '', 0.00, '2023-06-27 13:55:47.245');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('8e2733d9-9352-4206-a392-229779c52188', '0', NULL, NULL, 'ORD202306270009', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', NULL, '', '', 0.00, '2023-06-27 13:56:11.328');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('d00eac76-ff64-4681-8ba9-e1bf7535bb3b', '0', NULL, NULL, 'ORD202306270010', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', NULL, '', '', 0.00, '2023-06-27 13:56:39.389');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('6ac0dc96-6638-4bb0-874a-5337eaaf6445', '0', NULL, NULL, 'ORD202306270011', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', NULL, '', '', 0.00, '2023-06-27 13:56:59.601');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('95e5b4d2-5dd4-4801-a99b-91eee0fc4942', '1', '2023-07-15', 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307150024', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-07-13', '094a3c85-3b2f-4903-b1a1-4f7840204edf', '', 15000.00, '2023-07-15 16:42:54.152');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('db9bf0df-5e88-4813-b455-0e1d3db2a124', '0', '2023-06-28', NULL, 'ORD202306280013', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-20', '', '', 7.00, '2023-06-28 09:54:19.1');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('b9d89381-1956-41e6-ae28-e4bc55bf623c', '0', NULL, NULL, 'ORD202306280015', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', NULL, '', '', 0.00, '2023-06-28 10:42:40.316');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('95bba0e2-84c7-49b8-88b1-6bd86a73a7e3', '2', '2023-06-28', '67b9c2f7-228c-4edf-a53b-45dccf82e6af', 'ORD202306280014', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-14', 'e14dcbd0-0b06-4bb1-a7c8-c74c34ebd1c8', '', 20.00, '2023-06-28 11:05:19.317');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('ec3ee97b-56db-435a-8185-a4ca0abcfbff', '2', '2023-06-30', '67b9c2f7-228c-4edf-a53b-45dccf82e6af', 'ORD202306300016', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-14', '14b86190-8772-4b1f-8b33-05642b3df3d8', '', 130.00, '2023-06-30 16:16:15.925');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('ea682d39-850f-45cd-9854-9f120253a2fa', '0', '2023-07-02', '67b9c2f7-228c-4edf-a53b-45dccf82e6af', 'ORD202307010017', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-26', '', '11', 55.00, '2023-07-01 15:35:13.753');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('32cb3806-a1ec-4604-aafb-c84cd57fcb60', '2', '2023-07-06', 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307060018', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-07-04', '00fd1289-8cc9-46c4-81ea-76c68cd5c174', '', 15000.00, '2023-07-06 15:48:47.503');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('4ddb31a5-93f9-433d-afc2-c3c63c23d492', '2', '2023-07-07', 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307060020', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-26', '5d703004-85b5-4a29-81e7-ede268f74be4', '', 150.00, '2023-07-06 16:27:09.821');
INSERT INTO "SQSX23"."hotwavepurchaseorder" VALUES ('0b8cac0f-6c55-49bf-9b0a-d3293a5c8db9', '2', '2023-07-06', '4c94a6e7-7d5e-4141-bd5f-43816aaca39f', 'ORD202307060019', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '2023-06-27', '53288f39-305e-4b8a-9e3e-564438616db6', '', 4000.00, '2023-07-06 16:27:14.432');

-- ----------------------------
-- Table structure for hotwavesaleorder
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwavesaleorder";
CREATE TABLE "SQSX23"."hotwavesaleorder" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "actualpay" numeric(10,2),
  "merchant" varchar(36) COLLATE "pg_catalog"."default",
  "ordercode" varchar(36) COLLATE "pg_catalog"."default",
  "orderperson" varchar(36) COLLATE "pg_catalog"."default",
  "ordersource" varchar(20) COLLATE "pg_catalog"."default",
  "ordertime" varchar(30) COLLATE "pg_catalog"."default",
  "paymethod" varchar(20) COLLATE "pg_catalog"."default",
  "remark" varchar(100) COLLATE "pg_catalog"."default",
  "sendstate" varchar(20) COLLATE "pg_catalog"."default",
  "telephone" varchar(20) COLLATE "pg_catalog"."default",
  "totaldiscounts" numeric(10,2),
  "totalprice" numeric(10,2),
  "version" timestamp(6)
)
;

-- ----------------------------
-- Records of hotwavesaleorder
-- ----------------------------
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('b3af39e0-9831-4e06-b733-226026de0489', 500.00, '4a865fe0-1674-4476-953b-98eb563c6766', 'ORD202307140026', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-14 19:11:53', 'Cash', '', 'Shipped', '111', 0.00, 500.00, '2023-07-14 19:12:26.805');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('55995d52-ab78-4d85-8095-5097cb04a6d1', 50.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307150027', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-15 16:43:13', 'Cash', '', 'Shipped', '888888', 0.00, 50.00, '2023-07-15 16:44:03.722');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('53fde944-7cad-47d4-80bf-7279eae19ae1', 3000.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307140025', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-14 18:54:56', 'Cash', '', 'Done', '123456', 0.00, 3000.00, '2023-07-15 16:44:31.729');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('be964061-ddfe-4c75-867f-8c083e3e0185', 15000.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307060013', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06T15:48:47.216+08:00', 'UPay', '', 'Done', '', 0.00, 15000.00, '2023-07-06 15:48:47.35');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('d7c6c634-1bc7-443d-83fc-32135827d791', 37000.00, 'c85bc5af-4a2d-4926-b396-ab4509c39981', 'ORD202307060017', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06 16:12:42', 'UPay', '', 'UnShipped', '1366666', 0.00, 37000.00, '2023-07-06 16:13:51.923');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('a98b4f69-9a12-490b-a3d8-46dddb231d48', 69000.00, '4c94a6e7-7d5e-4141-bd5f-43816aaca39f', 'ORD202307060019', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06 16:14:41', 'AliPay', '', 'UnShipped', '1244444', 0.00, 69000.00, '2023-07-06 16:15:34.203');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('1e8be9dc-135e-45aa-840a-6786225cfcf5', 95000.00, '59b0436c-8ebf-4e5e-8bab-b6a74e056b10', 'ORD202307060020', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06 16:16:13', 'Cash', '', 'UnShipped', '053288888', 0.00, 95000.00, '2023-07-06 16:16:59.676');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('04d4a953-2be8-4ad1-a5a7-1b0e140af5e6', 6000.00, '3044ea27-df00-4b62-ac38-547f913f3585', 'ORD202307060018', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06 16:14:01', 'WeChat', '', 'Done', '1355555', 0.00, 6000.00, '2023-07-06 16:21:02.603');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('9b80828f-3e15-45ef-9229-e77602902263', 40000.00, '4a865fe0-1674-4476-953b-98eb563c6766', 'ORD202307060016', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06 16:09:57', 'Cash', '', 'Done', '0531666666', 0.00, 40000.00, '2023-07-06 16:21:06.406');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('f59f3927-b058-4dcf-8cd3-ce90292724a9', 3000.00, '607604d4-005c-41d1-9fc1-a8280622cbdb', 'ORD202307060015', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06 16:09:10', 'Cash', '', 'Done', '0531888888', 0.00, 3000.00, '2023-07-06 16:21:10.018');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('923fc08e-f04d-43ef-acfe-8a49890601f7', 150.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307060021', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06T16:27:09.742+08:00', 'UPay', '', 'Done', '', 0.00, 150.00, '2023-07-06 16:27:09.755');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('458645a7-2317-49e0-b7b1-365d5edf532f', 4000.00, '4c94a6e7-7d5e-4141-bd5f-43816aaca39f', 'ORD202307060022', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-06T16:27:14.379+08:00', 'UPay', '', 'Done', '', 0.00, 4000.00, '2023-07-06 16:27:14.39');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('84dbf26b-e070-4b6c-9f5b-e917ba2605e4', 7000.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307080023', 'bfb57723-dd63-4ae1-b873-6c865df0c8e1', '', '2023-07-08 21:12:44', 'Cash', '', 'UnShipped', '123456', 0.00, 7000.00, '2023-07-08 21:13:25.512');
INSERT INTO "SQSX23"."hotwavesaleorder" VALUES ('b3a7b772-80b1-413b-b95c-4da3f46e3ba5', 400000.00, 'b868e029-a47e-4c8f-bc44-90db311baae6', 'ORD202307100024', 'b868e029-a47e-4c8f-bc44-90db311baae6', '', '2023-07-10 22:31:33', 'Cash', '', 'Shipped', '110', 0.00, 400000.00, '2023-07-10 22:32:34.082');

-- ----------------------------
-- Table structure for hotwavestaff
-- ----------------------------
DROP TABLE IF EXISTS "SQSX23"."hotwavestaff";
CREATE TABLE "SQSX23"."hotwavestaff" (
  "id" varchar(36) COLLATE "pg_catalog"."default" NOT NULL,
  "code" varchar(1000) COLLATE "pg_catalog"."default",
  "idnumber" varchar(36) COLLATE "pg_catalog"."default",
  "mailbox" varchar(500) COLLATE "pg_catalog"."default",
  "merchant" varchar(36) COLLATE "pg_catalog"."default",
  "name" varchar(1000) COLLATE "pg_catalog"."default",
  "orcorpor" char(1) COLLATE "pg_catalog"."default",
  "telephone" varchar(18) COLLATE "pg_catalog"."default",
  "version" timestamp(6)
)
;

-- ----------------------------
-- Records of hotwavestaff
-- ----------------------------

-- ----------------------------
-- Primary Key structure for table hotwavegoods
-- ----------------------------
ALTER TABLE "SQSX23"."hotwavegoods" ADD CONSTRAINT "hotwavegoods_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table hotwavegoodsstock
-- ----------------------------
ALTER TABLE "SQSX23"."hotwavegoodsstock" ADD CONSTRAINT "hotwavegoodsstock_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table hotwavemerchant
-- ----------------------------
ALTER TABLE "SQSX23"."hotwavemerchant" ADD CONSTRAINT "hotwavemerchant_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table hotwaveorderdetail
-- ----------------------------
ALTER TABLE "SQSX23"."hotwaveorderdetail" ADD CONSTRAINT "hotwaveorderdetail_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table hotwavepurchasedetail
-- ----------------------------
ALTER TABLE "SQSX23"."hotwavepurchasedetail" ADD CONSTRAINT "hotwavepurchasedetail_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table hotwavepurchaseorder
-- ----------------------------
ALTER TABLE "SQSX23"."hotwavepurchaseorder" ADD CONSTRAINT "hotwavepurchaseorder_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table hotwavesaleorder
-- ----------------------------
ALTER TABLE "SQSX23"."hotwavesaleorder" ADD CONSTRAINT "hotwavesaleorder_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table hotwavestaff
-- ----------------------------
ALTER TABLE "SQSX23"."hotwavestaff" ADD CONSTRAINT "hotwavestaff_pkey" PRIMARY KEY ("id");
