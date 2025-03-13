const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    // Check if admin exists
    const adminExists = await prisma.user.findFirst({
      where: {
        role: 'ADMIN'
      }
    });

    if (adminExists) {
      console.log('Admin user already exists. Skipping seed.');
      return;
    }

    // Create admin user
    const password = process.env.ADMIN_PASSWORD;
    if (!password) {
      throw new Error('ADMIN_PASSWORD environment variable is required');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.user.create({
      data: {
        email: process.env.ADMIN_EMAIL || 'admin@greenroots.com',
        name: 'Admin User',
        password: hashedPassword,
        role: 'ADMIN'
      }
    });

    console.log('Admin user created successfully:', admin.email);
  } catch (error) {
    console.error('Error seeding admin user:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();