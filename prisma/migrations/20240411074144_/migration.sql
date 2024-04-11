-- CreateEnum
CREATE TYPE "InsuranceType" AS ENUM ('Prime', 'Sonarwa', 'Radiant');

-- CreateEnum
CREATE TYPE "SupportType" AS ENUM ('Equipment', 'Seeds', 'Advisor', 'Other');

-- CreateTable
CREATE TABLE "Support" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "insurance" "InsuranceType" NOT NULL,
    "support" "SupportType" NOT NULL,
    "message" TEXT,

    CONSTRAINT "Support_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Support_userEmail_key" ON "Support"("userEmail");

-- AddForeignKey
ALTER TABLE "Support" ADD CONSTRAINT "Support_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
