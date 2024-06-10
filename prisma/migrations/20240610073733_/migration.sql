/*
  Warnings:

  - Changed the type of `userId` on the `Insurance` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Insurance" DROP CONSTRAINT "Insurance_email_fkey";

-- DropIndex
DROP INDEX "Insurance_email_key";

-- AlterTable
ALTER TABLE "Insurance" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Insurance" ADD CONSTRAINT "Insurance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
