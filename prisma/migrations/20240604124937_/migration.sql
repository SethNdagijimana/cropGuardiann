/*
  Warnings:

  - Changed the type of `insurance` on the `Support` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `support` on the `Support` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Support" DROP COLUMN "insurance",
ADD COLUMN     "insurance" TEXT NOT NULL,
DROP COLUMN "support",
ADD COLUMN     "support" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isEmailVerfied" SET DEFAULT false;

-- CreateTable
CREATE TABLE "resetPasswordToken" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "resetPasswordToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "resetPasswordToken_token_key" ON "resetPasswordToken"("token");
