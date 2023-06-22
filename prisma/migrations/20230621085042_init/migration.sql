-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "score" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Marker" (
    "id" UUID NOT NULL,
    "image" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Marker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Animation" (
    "id" UUID NOT NULL,
    "animation" TEXT NOT NULL,
    "position" TEXT NOT NULL,

    CONSTRAINT "Animation_pkey" PRIMARY KEY ("id")
);
