/*
  Warnings:

  - A unique constraint covering the columns `[userEmail]` on the table `Feedback` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Feedback_userEmail_key" ON "Feedback"("userEmail");
